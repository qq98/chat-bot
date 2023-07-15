<!--
 * @Author: N0ts
 * @Date: 2023-03-02 15:53:15
 * @Description: ChatGPT
 * @FilePath: /chat-gpt/src/App.vue
 * @Mail：mail@n0ts.top
-->
<template>
    <div id="chatgpt" :class="{ print: exportLoading }">
        <div
            id="sidebar"
            v-if="!exportLoading"
            :class="{ sideBarShow: sideBarShow }"
        >
            <div class="btns">
                <div class="btn" @click="newClient">🤓 新建会话</div>
            </div>
            <div id="chats" v-if="!exportLoading">
                <div
                    v-for="(item, index) in clients"
                    :key="index"
                    @click="clientsIndex = index"
                    :class="{ active: clientsIndex == index }"
                >
                    <p>{{ item.name }}</p>
                    <span @click.stop="removeClient(index)">🗑 删除</span>
                </div>
            </div>
            <div id="bottom">
                <div class="btn" @click="changeRobot">
                    {{
                        chatRobot == "chatgpt"
                            ? "🔎 切换为 NewBing"
                            : "💬 切换为 ChatGPT"
                    }}
                </div>
                <div class="btn" @click="themeUtil.switchTheme">
                    {{
                        themeUtil.themeCache.value == "light"
                            ? "🌃 暗色模式"
                            : "🌇 亮色模式"
                    }}
                </div>
                <div class="btn" @click="settingShow = true">👐 打开配置</div>
                <div class="btn" @click="reloadConfig">👊 重置配置</div>
                <div class="btn" @click="openSupport">☕️ 支持我</div>
                <div class="money" v-if="moneyData">
                    余额：{{
                        moneyToFixed(moneyData.soft_limit_usd, 2)
                    }}
                    $，已用：{{
                        moneyToFixed(
                            moneyData.system_hard_limit_usd -
                                moneyData.soft_limit_usd,
                            2
                        )
                    }}
                    $
                </div>
            </div>
            <div id="showBtn" @click="sideBarShow = !sideBarShow">
                {{ sideBarShow ? "👈" : "👉" }}
            </div>
        </div>
        <div id="main">
            <!-- <div id="title">{{ clients[clientsIndex].name }}</div> -->
            <!-- ChatGPT -->
            <div
                id="messages"
                :class="{ print: exportLoading }"
                v-if="chatRobot == 'chatgpt' && clients[clientsIndex]"
            >
                <div
                    v-for="(item, index) in clients[clientsIndex].contents"
                    :key="index"
                    :class="item.role == 'user' ? 'right' : 'left'"
                >
                    <div class="img">
                        <div v-if="item.role == 'system'" class="system">
                            SY
                        </div>
                        <div v-else-if="item.role == 'user'" class="user">
                            Me
                        </div>
                        <div v-else class="ai">
                            {{ config.robot == "chatgpt" ? "GPT" : "Bing" }}
                        </div>
                    </div>
                    <div
                        class="content"
                        :class="{
                            end:
                                !loading ||
                                index !=
                                    clients[clientsIndex].contents.length - 1
                        }"
                        v-html="item.content"
                    ></div>
                    <!-- <div class="tokens">
              tokens：{{ item.tokens == 0 ? "..." : item.tokens }}
          </div> -->
                </div>
                <div id="stretch" v-if="!exportLoading"></div>
            </div>
            <!-- newbing -->
            <div
                id="messages"
                :class="{ print: exportLoading }"
                v-else-if="chatRobot == 'newbing'"
            >
                <div
                    v-for="(item, index) in newBingClient.contents"
                    :key="index"
                    :class="item.role == 'user' ? 'right' : 'left'"
                >
                    <div class="img">
                        <div v-if="item.role == 'system'" class="system">
                            SY
                        </div>
                        <div v-else-if="item.role == 'user'" class="user">
                            Me
                        </div>
                        <div v-else class="ai">
                            {{ config.robot == "chatgpt" ? "GPT" : "Bing" }}
                        </div>
                    </div>
                    <div
                        class="content"
                        :class="{
                            end:
                                !loading ||
                                index != newBingClient.contents.length - 1
                        }"
                        v-html="item.content"
                    ></div>
                    <!-- <div class="tokens">
              tokens：{{ item.tokens == 0 ? "..." : item.tokens }}
          </div> -->
                    <div
                        class="links"
                        v-if="
                            index == newBingClient.contents.length - 1 &&
                            !loading
                        "
                    >
                        <a
                            :href="item1.seeMoreUrl"
                            target="_blank"
                            v-for="(item1, index1) in nbLinks"
                            :key="index1"
                            >🔗 {{ item1.providerDisplayName }}</a
                        >
                    </div>
                </div>
                <div id="stretch" v-if="!exportLoading"></div>
            </div>
            <div v-else id="home">
                <div>
                    <p>🤪 N0tsChat | 集成 ChatGPT 与 NewBing</p>
                    <div class="content">
                        <p>
                            本项目完全开源，无需担心隐私问题，所有聊天记录均保存在本地
                        </p>
                        <p>解决无法访问外网痛点，导致无法使用 AI 对话</p>
                        <p>
                            开源地址（求 star）：<a
                                href="https://gitee.com/n0ts/chat-gpt"
                                target="_blank"
                                >Gitee</a
                            >
                        </p>
                        <p>
                            技术交流：<a
                                href="https://jq.qq.com/?_wv=1027&k=Mh7ah6Dd"
                                >坚果小栈</a
                            >
                        </p>
                    </div>
                </div>
            </div>
            <div id="input" v-if="!exportLoading">
                <div
                    class="stop"
                    :class="{ stopShow: loading }"
                    @click="stopMessage"
                >
                    停止回复 🛑
                </div>
                <!-- <p>tokens 总和：{{ tokensCountNum }}</p> -->
                <div class="textarea">
                    <div class="btns">
                        <div @click="exportPdf">📄 导出PDF</div>
                        <div
                            @click="reloadNewBing(false)"
                            v-if="chatRobot == 'newbing'"
                        >
                            🔃 重载对话
                        </div>
                    </div>
                    <div class="questions">
                        <div
                            v-for="(item, index) in nbQuestions"
                            :key="index"
                            @click="clickQuestion(item)"
                        >
                            ❓ {{ item.text }}
                        </div>
                    </div>
                    <textarea
                        v-model="message"
                        @keydown="keydown"
                        @keyup="keyup"
                        :style="{ height: textareaHeight + 'px' }"
                    ></textarea>
                </div>
                <p>
                    当前 AI：{{ getNowAI() }} | 当前 Model：{{ config.model }}
                </p>
            </div>
        </div>
    </div>

    <DialogCom title="初次配置" :show="okKeyDialog">
        <template #center>
            <p>请在下方输入你的 GPT Key</p>
            <p>
                申请地址：<a
                    href="https://platform.openai.com/account/api-keys"
                    target="_blank"
                    >点我</a
                >
            </p>
            <input v-model="confirmKey" @keydown.enter="okKey" />
            <p class="tips">
                key 会保存在本地浏览器(localStorage)中，只供本地使用
            </p>
        </template>
        <template #bottom>
            <button class="success" @click="okKey">存储</button>
            <button class="info" @click="holdKey">跳过</button>
        </template>
    </DialogCom>

    <DialogCom title="设置" :show="settingShow">
        <template #center>
            <div class="panel">
                <div>
                    <p>GPT Key：</p>
                    <input type="text" v-model="config.key" />
                </div>
                <p class="tips">OpenAI 申请的 Key</p>
                <div>
                    <p>Model：</p>
                    <select v-model="config.model">
                        <option
                            v-for="(item, index) in config.models"
                            :key="index"
                            :value="item"
                        >
                            {{ item }}
                        </option>
                    </select>
                </div>
                <p class="tips">ChatGPT 模型选择</p>
                <div>
                    <p>行为设定：</p>
                    <input type="text" v-model="config.system" />
                </div>
                <p class="tips">
                    <span>给 OpenAI 设定一个行为，比如：</span>
                    <br />
                    <span>“你是一直猫，每句话后面加个 喵~”</span>
                </p>
                <div>
                    <p>BingCookie：</p>
                    <input type="text" v-model="config.nbCookie" />
                </div>
                <p class="tips">
                    <span
                        >前往
                        <a href="https://cn.bing.com/" target="_blank">Bing</a
                        >，F12 打开控制台输入 “document.cookie”</span
                    >
                    <br />
                    <span>复制内容到这即可</span>
                </p>
            </div>
        </template>
        <template #bottom>
            <button class="success" @click="toggleSetting">保存</button>
            <button class="info" @click="settingShow = !settingShow">
                关闭
            </button>
        </template>
    </DialogCom>

    <!-- <iframe
        id="iframe"
        style="width: 300px; height: 345px"
        role="presentation"
        src="https://www.bing.com/images/create?partner=sydney&re=1&showselective=1&sude=1&kseed=7500&SFX=2&q=狗子喝水&iframeid=dfda0ffa-2af0-4bb6-b35a-6feaf6c3e74f"
        frameborder="0"
    ></iframe> -->
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, watch } from "vue";
import axios from "axios";
import DialogCom from "@/components/dialogCom.vue";
import messageUtil from "@/utils/messageUtil";
import hljs from "highlight.js";
import Clipboard from "clipboard";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import themeUtil from "@/utils/themeUtil";
import cacheUtil from "@/utils/cacheUtil";
import MarkdownIt from "markdown-it";
import mk from "@iktakahiro/markdown-it-katex";
import pdfUtil from "@/utils/pdf";

const { config, read, save } = cacheUtil;

const backupConfig = JSON.parse(JSON.stringify(config));

// 读取配置
read();

const apiBaseUrl = ref("");
if (config.apiBaseUrl && config.apiBaseUrl !== "") {
    apiBaseUrl.value = config.apiBaseUrl;
} else {
    apiBaseUrl.value = backupConfig.apiBaseUrl;
}

const md = new MarkdownIt();
md.use(mk);

// 输入 key dialog
const okKeyDialog = ref(config.key == "");

// 获取聊天窗口 dom
let messageDom: Element | null = null;
// Viewer
let viewer: any = null;

onMounted(() => {
    viewer = new Viewer(document.querySelector("#main") as HTMLElement);
    messageDom = document.querySelector("#messages");
    themeUtil.load();

    if (config.key) {
        getMoeny();
    }
});

/**
 * 确认 key
 */
const confirmKey = ref("");

function okKey() {
    if (confirmKey.value == "") {
        return messageUtil({
            type: "warning",
            content: "key 不能为空"
        });
    }

    config.key = confirmKey.value;
    confirmKey.value = "";
    save();

    okKeyDialog.value = false;
    messageUtil({
        type: "success",
        content: "key 存储成功，开始提问吧"
    });

    getMoeny();
}

function holdKey() {
    okKeyDialog.value = false;
    config.key = "暂无配置";
    save();
    messageUtil({
        type: "warning",
        content: "暂未配置 key，无法使用 ChatGPT"
    });
}

// 是否正在加载
const loading = ref(false);
// 对话机器人
const chatRobot = ref(config.robot);

/**
 * 提交问题
 */
async function submit() {
    loading.value = true;

    let messages: IMessage[] = [];

    if (chatRobot.value == "chatgpt") {
        const clientCache = clients[clientsIndex.value].contents;
        const lastClientCache = clientCache[clientCache.length - 1];
        if (lastClientCache.role != "assistant") pushResult("assistant", "");

        let cacheSystemClient: IMessage | null = null;
        if (clientCache[0].role == "system") {
            cacheSystemClient = clientCache[0];
        }
        messages = clientCache.slice(
            clients[clientsIndex.value].exceedTokens * 2
        );
        if (cacheSystemClient) {
            messages.unshift(cacheSystemClient);
        }
    }

    if (chatRobot.value == "chatgpt") {
        chatgpt(messages);
    } else {
        newBing();
    }
}

function chatgpt(messages: IMessage[]) {
    fetch(`${apiBaseUrl.value}/chatgpt-stream`, {
        method: "POST",
        body: JSON.stringify({
            key: config.key,
            model: config.model,
            messages: messages.map((item) => {
                return {
                    role: item.role,
                    content: item.stream
                };
            }),
            timeout: 60000
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res: any) => {
            const reader = res.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let streamCache = "";

            reader.read().then(async function processText(res: any) {
                if (res.done || !loading.value) {
                    return;
                }

                const decodeContent = decoder.decode(res.value);

                // error
                if (decodeContent.includes(`"error": {\n`)) {
                    loading.value = false;
                    return errorHandle(decodeContent);
                }

                // done
                if (decodeContent.includes("data: [DONE]")) {
                    loading.value = false;
                    const client =
                        clients[clientsIndex.value].contents[
                            clients[clientsIndex.value].contents.length - 1
                        ];
                    client.tokens = await computedToken(client.content);

                    saveMessage();
                    await nextTick();
                    hljsInit();
                    viewer.update();
                    return;
                }

                decodeContent
                    .replaceAll("data: ", "")
                    .split("\n")
                    .filter(Boolean)
                    .forEach(async (item: string) => {
                        const itemObj = JSON.parse(item);
                        if (!itemObj.choices[0].delta.content) {
                            return;
                        }

                        const str = itemObj.choices[0].delta.content;

                        streamCache += str;

                        clients[clientsIndex.value].contents[
                            clients[clientsIndex.value].contents.length - 1
                        ].content = md.render(streamCache);
                        clients[clientsIndex.value].contents[
                            clients[clientsIndex.value].contents.length - 1
                        ].stream = streamCache;
                        await nextTick();
                        hljsInit();
                    });

                return reader.read().then(processText);
            });
        })
        .catch(() => {
            clients[clientsIndex.value].contents[
                clients[clientsIndex.value].contents.length - 1
            ].content =
                "<p>发起网络请求失败，服务器可能正在维护中，请稍后重试</p>";
            messageUtil({
                type: "danger",
                content: "发起网络请求失败，请稍后重试"
            });
            saveMessage();
            loading.value = false;
        });
}

/**
 * 存入数据
 */
async function pushResult(
    role: "user" | "assistant" | "system",
    content: string,
    errContent?: string
) {
    const resultContent = errContent ? errContent : content;
    const contentData = {
        role,
        content: md.render(resultContent),
        tokens: 0,
        stream: resultContent
    };
    if (chatRobot.value == "chatgpt") {
        clients[clientsIndex.value].contents.push(contentData);
    } else {
        newBingClient.value.contents.push(contentData);
    }

    // contentData.tokens = await computedToken(contentData.stream);
    saveMessage();
    await nextTick();
    hljsInit();
    viewer.update();
}

/**
 * 保存会话
 */
function saveMessage() {
    window.localStorage.setItem("message-data", JSON.stringify(clients));
    tokensCount();
}

// 消息框内容
const message = ref("");

/**
 * 发送消息
 */
function send() {
    // 检验为空不处理
    if (message.value == "" || message.value.trim() == "" || loading.value) {
        return;
    }

    // 没有对话时
    if (chatRobot.value == "chatgpt" && clientsIndex.value == -1) {
        clients.unshift({
            name: "",
            contents: [],
            exceedTokens: 0
        });
        clientsIndex.value = 0;
    }

    // 是否设置了行为
    if (
        chatRobot.value == "chatgpt" &&
        config.system &&
        clients[clientsIndex.value].contents.length == 0
    ) {
        pushResult("system", config.system);
    }

    pushResult("user", message.value);

    // 第一句对话修改标题
    if (
        chatRobot.value == "chatgpt" &&
        (clients[clientsIndex.value].contents.length == 1 ||
            (clients[clientsIndex.value].contents[0].role == "system" &&
                clients[clientsIndex.value].contents.length == 2))
    ) {
        if (chatRobot.value == "chatgpt") {
            const cacheName = message.value;
            let num = 1;
            clients.forEach((item) => {
                if (item.name.indexOf(cacheName) == 0) {
                    num++;
                }
            });
            clients[clientsIndex.value].name =
                cacheName + (num == 1 ? "" : ` #${num}`);
            document.title = cacheName + " | 🤪N0tsChat";
        }
    }

    // 清空输入框
    message.value = "";

    submit();
}

/**
 * 滚动到底部
 */
let scrollLock = false;

function scrollToBottom() {
    if (scrollLock) {
        return;
    }
    scrollLock = true;
    setTimeout(() => {
        scrollLock = false;
        messageDom = document.querySelector("#messages");
        if (messageDom) {
            // const childrens = messageDom.children;
            // let height = 0;
            // if (childrens[childrens.length - 1]) {
            //     height += childrens[childrens.length - 1].clientHeight;
            // }
            // if (childrens[childrens.length - 2]) {
            //     height += childrens[childrens.length - 2].clientHeight;
            // }
            messageDom.scrollTo({
                top: messageDom.scrollHeight,
                behavior: "smooth"
            });
        } else {
            scrollToBottom();
        }
    }, 300);
}

// shift 是否按住
let shiftDown = false;

/**
 * 消息框键盘按下
 */
function keydown(event: KeyboardEvent) {
    // shift 是否按下
    if (event.keyCode === 16) {
        shiftDown = true;
    }
    // shift 不按住与 enter 按下，则发送
    if (!shiftDown && event.keyCode === 13) {
        send();
        event.preventDefault();
        return false;
    }
}

/**
 * 消息框键盘抬起
 */
function keyup(event: KeyboardEvent) {
    // shift 是否取消按下
    if (event.keyCode === 16) {
        shiftDown = false;
    }
}

// 消息框高度
const textareaHeight = ref(24);

// 监听消息框内容变化改变高度
watch(
    () => message.value,
    () => {
        // 根据换行符计算高度
        const lines = message.value.split("\n").length;
        textareaHeight.value = lines * 24;
    }
);

// 消息列表
interface IMessage {
    role: "user" | "assistant" | "system";
    content: string;
    tokens: number;
    stream: string;
}

// 回话列表
interface IClient {
    name: string;
    contents: Array<IMessage>;
    exceedTokens: number;
}

const cacheClients = window.localStorage.getItem("message-data");
const clients: Array<IClient> = reactive(
    cacheClients ? JSON.parse(cacheClients) : []
);
const clientsIndex = ref(-1);

// 会话索引切换
watch(
    () => clientsIndex.value,
    async () => {
        if (clients[clientsIndex.value]) {
            document.title = clients[clientsIndex.value].name + " | 🤪N0tsChat";
            await nextTick();
            tokensCount();
            hljsInit();
            viewer.update();
            // MathJax.TypeSet();
        }
    }
);

/**
 * 创建新会话
 */
function newClient() {
    saveMessage();
    let num = 1;
    clients.forEach((item) => {
        if (item.name.indexOf("新会话") == 0) {
            num++;
        }
    });
    clients.unshift({
        name: "新会话" + (num == 1 ? "" : ` #${num}`),
        contents: [],
        exceedTokens: 0
    });
    message.value = "";
    clientsIndex.value = 0;
}

/**
 * 删除会话
 */
function removeClient(i: number) {
    // 删除会话
    document.title = "🤪N0tsChat";
    clients.splice(i, 1);
    clientsIndex.value = -1;
    saveMessage();
}

/**
 * 代码高亮
 */
async function hljsInit() {
    const dom: any = [];
    const codeBlocks = document.querySelectorAll("#messages pre code");
    codeBlocks.forEach((cache) => {
        const item = cache as HTMLElement;
        if (item.getAttribute("class")?.includes("hljs")) {
            return;
        }
        const copyBtn = document.createElement("div");
        copyBtn.className = "copyBtn";
        copyBtn.innerHTML = "复制";
        copyBtn.setAttribute("code", item.innerText);
        copyBtn.addEventListener("click", (e) => {
            copyCode(e);
        });
        item.parentElement?.appendChild(copyBtn);
        hljs.highlightElement(item as HTMLElement);
        dom.push(item);
    });
    addCodeNum(dom);
    scrollToBottom();
}

/**
 * 添加代码行号
 */
function addCodeNum(dom: any) {
    for (let i = 0; i < dom.length; i++) {
        const enter = dom[i].innerHTML.replace(/\n/g, "</li><li>");
        dom[i].innerHTML = `<ol><li>${enter}</li></ol>`.replace(
            "<li></li></ol>",
            "</ol>"
        );
    }
}

// 侧边栏显示
const sideBarShow = ref(false);

/**
 * 复制代码块
 */
function copyCode(el: MouseEvent) {
    const code = (el.target as HTMLElement).getAttribute("code");
    if (code) {
        Clipboard.copy(code);
        messageUtil({
            type: "success",
            content: "复制成功"
        });
    }
}

/**
 * 重置配置
 */
function reloadConfig() {
    window.localStorage.removeItem("message-data");
    window.localStorage.removeItem("n0ts-chatgpt-theme");
    window.localStorage.removeItem("n0ts-chatgpt-config");
    window.location.reload();
}

// 设置显示
const settingShow = ref(false);

/**
 * 确认设定
 */
function toggleSetting() {
    settingShow.value = !settingShow.value;
    save();
    messageUtil({
        type: "success",
        content: "设置已保存"
    });
}

/**
 * 获取余额
 */
const moneyData: any = ref(null);
async function getMoeny() {
    return;
    // const { data } = await axios({
    //     method: "post",
    //     url: `${apiBaseUrl.value}/cors`,
    //     data: {
    //         method: "GET",
    //         url: "https://api.openai.com/dashboard/billing/subscription",
    //         headers: {
    //             authorization: `Bearer ${config.key}`
    //         }
    //     }
    // });
    // moneyData.value = data.data;
    // console.log("🚀 余额数据 | moneyData.value:", moneyData.value);
}

/**
 * 保留两位
 */
function moneyToFixed(num: any, fixed: number) {
    return Number(num.toFixed(fixed));
}

/**
 * 错误处理
 */
function errorHandle(error: string) {
    const errorObj = JSON.parse(
        error.replace("未知错误，请联系站长解决！", "")
    );
    console.error("报错了哥们", errorObj);

    if (errorObj.error.code == "invalid_api_key") {
        messageUtil({
            type: "danger",
            content: "API Key 错误，请重新配置"
        });
        config.key = "";
        save();
        okKeyDialog.value = true;
        return;
    } else if (errorObj.error.code == "context_length_exceeded") {
        // messageUtil({
        //     type: "danger",
        //     content: "会话内容已超出，已自动开启优化"
        // });
        clients[clientsIndex.value].exceedTokens += 1;
        return submit();
    }

    clients[clientsIndex.value].contents[
        clients[clientsIndex.value].contents.length - 1
    ].content = error;
}

/**
 * token 计算
 */
async function computedToken(content: string) {
    return 0;
    // if (!content) {
    //     return 0;
    // }
    // const { data } = await axios({
    //     method: "GET",
    //     url: `${apiBaseUrl.value}/chatgpt/encoder`,
    //     params: {
    //         content
    //     }
    // });
    // if (data.status == 400) {
    //     return 0;
    // }
    // return data.data.tokens / 2;
}

/**
 * tokens 总和
 */
const tokensCountNum = ref(0);

function tokensCount() {
    if (!clients[clientsIndex.value]) {
        return;
    }
    let count = 0;
    clients[clientsIndex.value].contents.forEach((item) => {
        count += item.tokens;
    });
    tokensCountNum.value = count;
}

/**
 * 停止回复
 */
function stopMessage() {
    loading.value = false;

    // newbing 处理
    if (chatRobot.value == "newbing") {
        ws.close();
    }
}

/**
 * 导出 pdf
 */
const exportLoading = ref(false);
async function exportPdf() {
    exportLoading.value = true;
    await nextTick();
    await pdfUtil(
        "对话导出 | " +
            new Date().toLocaleDateString().replaceAll("/", "-").toString(),
        "#main"
    );
    messageUtil({
        type: "success",
        content: "正在导出中，耐心稍等一会~"
    });
    exportLoading.value = false;
}

function changeRobot() {
    config.robot = chatRobot.value =
        chatRobot.value == "chatgpt" ? "newbing" : "chatgpt";
    save();
}

const newBingKey = ref<any>(null);
async function getNewBingKey() {
    if (newBingKey.value) {
        return newBingKey.value;
    }
    const { data } = await axios.post(`${apiBaseUrl.value}/bing/new`, {
        cookie: config.nbCookie
    });
    newBingKey.value = data.data;
    return newBingKey.value;
}

let isStartOfSession = true;
const question = ref<any>([]);
const nbLinks = ref<any>([]);
const nbQuestions = ref<any>([]);
const newBingClient = ref<IClient>({
    name: "newbing",
    contents: [],
    exceedTokens: 0
});
let ws: any = null;
async function newBing() {
    if (!config.nbCookie) {
        reloadNewBing(true);
        return messageUtil({
            type: "danger",
            content: "请在配置中填写 Bing Cookie 后使用"
        });
    }

    nbQuestions.value = [];

    const messages = newBingClient.value.contents;
    // 插入回复
    messages.push({
        role: "assistant",
        content: "",
        tokens: 0,
        stream: ""
    });
    const meMsg = messages[messages.length - 2];
    const botMsg = messages[messages.length - 1];

    let ids = await getNewBingKey();

    ws = new WebSocket("wss://api.n0ts.top/newbing");

    ws.onopen = () => {
        console.log("NewBing Ws Open，Content：" + meMsg.stream);
        ws.send(
            JSON.stringify({
                text: meMsg.stream,
                isStartOfSession,
                ...ids
            })
        );
        isStartOfSession = false;
    };

    ws.onmessage = async (e: MessageEvent) => {
        try {
            const cache = JSON.parse(e.data);
            if (cache.question || cache.links) {
                question.value = cache;
            }
        } catch {
            console.log(e.data);
            botMsg.content = md.render((botMsg.stream = e.data));
            await nextTick();
            hljsInit();
        }
    };

    ws.onclose = async () => {
        console.log("NewBing Ws Close");
        loading.value = false;
        saveMessage();
        await nextTick();
        hljsInit();
        viewer.update();

        nbLinks.value = question.value.links;
        nbQuestions.value = question.value.question;
        console.log(question.value);
        console.log("相关链接", nbLinks.value);
        console.log("相关问题", nbQuestions.value);
    };
}

/**
 * 获取当前 AI
 */
function getNowAI() {
    if (chatRobot.value == "chatgpt") {
        return "ChatGPT";
    } else {
        return "NewBing";
    }
}

/**
 * NewBing 重载会话
 */
function reloadNewBing(tipClose?: boolean) {
    newBingClient.value.contents = [];
    newBingKey.value = null;
    ws = null;
    isStartOfSession = true;
    loading.value = false;
    nbLinks.value = [];
    nbQuestions.value = [];
    if (tipClose) return;
    messageUtil({
        type: "success",
        content: "对话重载成功"
    });
}

/**
 * 问题点击
 */
function clickQuestion(item: any) {
    message.value = item.text;
    nbQuestions.value = [];
    send();
}

function openSupport() {
    window.open("https://support.n0ts.top/");
}
</script>

<style scoped lang="less">
@import url("https://cdn.bootcdn.net/ajax/libs/firacode/6.2.0/fira_code.min.css");

#iframe {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 200px;
    height: 200px;
}

#chatgpt {
    height: 100%;
    display: flex;
    background-color: var(--background-color-1);
    color: var(--text-color);
    font-size: 0.9rem;

    > div {
        width: 100%;
    }

    #sidebar {
        min-width: 300px;
        width: 300px;
        height: 100%;
        background-color: #202123;
        position: relative;
        left: 0;
        top: 0;
        z-index: 1;
        color: white;
        display: flex;
        flex-direction: column;
        border-radius: 0 10px 10px 0;

        .btns {
            padding: 10px 10px 0;
        }

        .btn {
            border: 1px solid #ffffff33;
            padding: 10px 0 10px 30px;
            margin-bottom: 10px;
            border-radius: 5px;
            cursor: pointer;
            user-select: none;

            &:hover {
                background-color: #2b2c2f;
            }
        }

        #chats {
            overflow-y: scroll;
            height: 100%;

            &::-webkit-scrollbar {
                width: 10px;
                height: 1px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                background: #444653;
            }

            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
            }

            > div {
                padding: 10px 0 10px 30px;
                overflow: hidden;
                margin-bottom: 10px;
                position: relative;
                border-radius: 5px;

                p {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                    overflow: hidden;
                    width: 70%;
                }

                span {
                    font-size: 0.8rem;
                    color: gray;
                    opacity: 0;
                    visibility: hidden;
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translate(10px, -50%);
                    cursor: pointer;

                    &:hover {
                        color: red;
                    }
                }

                &:hover {
                    background-color: #2b2c2f;
                }

                &:hover span {
                    opacity: 1;
                    visibility: visible;
                    transform: translate(0, -50%);
                }
            }

            .active {
                background-color: #2b2c2f;
            }
        }

        #showBtn {
            position: absolute;
            top: 10%;
            right: 0;
            transform: translateX(100%);
            padding: 10px 15px;
            background-color: #202123;
            cursor: pointer;
            z-index: 1;
            user-select: none;
            visibility: hidden;
        }

        #bottom {
            border-top: 1px solid #ffffff33;
            width: 100%;
            padding: 10px 10px 0;
            box-sizing: border-box;

            .btn {
                border: none;
            }

            .money {
                padding: 10px 5px;
            }
        }
    }

    .sideBarShow {
        transform: translateX(0) !important;
    }

    #main {
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: var(--background-color-1);

        #input {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            background-image: linear-gradient(
                to bottom,
                transparent,
                var(--background-color-2) 40%
            );
            padding-top: 50px;
            box-sizing: border-box;

            .textarea {
                position: absolute;
                left: 50%;
                bottom: 30%;
                transform: translateX(-50%);
                width: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                textarea {
                    width: 90%;
                    border-radius: 6px;
                    border: 1px solid var(--background-color-1);
                    background: var(--background-color-1);
                    outline: none;
                    resize: none;
                    padding: 15px 20px;
                    color: var(--text-color);
                    max-height: 150px;
                    overflow-y: auto;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                    font-size: 1rem;

                    &::-webkit-scrollbar {
                        width: 8px;
                        height: 1px;
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        box-shadow: none;
                        background: #565868;
                    }

                    &::-webkit-scrollbar-track {
                        box-shadow: none;
                        border-radius: 10px;
                        background: transparent;
                    }
                }

                .btns {
                    position: absolute;
                    left: 0;
                    top: -50px;
                    display: flex;
                    align-items: center;
                    height: 50px;

                    > div {
                        margin-right: 15px;
                        cursor: pointer;

                        &:hover {
                            color: gray;
                        }
                    }
                }

                .questions {
                    position: absolute;
                    right: 5%;
                    bottom: 120%;

                    > div {
                        cursor: pointer;

                        &:hover {
                            color: gray;
                        }
                    }
                }
            }

            p {
                position: absolute;
                left: 50%;
                bottom: 10%;
                transform: translateX(-50%);
                font-size: 0.8rem;
                opacity: 0.5;
            }

            .stop {
                position: absolute;
                left: 50%;
                top: 10%;
                z-index: 1;
                padding: 5px 20px;
                border: 1px solid var(--border-color);
                border-radius: 10px;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transform: translate(-50%, 10px);
            }

            .stopShow {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, 0);
            }
        }

        #title {
            padding: 20px 50px;
            border-bottom: 1px solid var(--background-color-2);
        }

        #messages {
            height: 100%;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 10px;
                height: 1px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                background: #444653;
            }

            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                background: var(--background-color-1);
            }

            #stretch {
                height: 15%;
                border-bottom: none;
            }

            > .right {
                // background-color: var(--background-color-1);
                flex-direction: row-reverse;

                > .content {
                    // text-align: right;
                    background-color: var(--message-bg);
                }
            }

            > .left {
                // background-color: var(--background-color-2);

                > .content {
                    background-color: var(--message-bg2);
                }
            }

            > div {
                padding: 25px 100px;
                display: flex;
                flex-wrap: nowrap;
                // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                position: relative;

                .tokens {
                    position: absolute;
                    right: 20px;
                    top: 10px;
                    opacity: 0.4;
                }

                .img {
                    border-radius: 5px;
                    min-width: 40px;
                    width: 40px;
                    height: 40px;
                    overflow: hidden;
                    user-select: none;
                    color: white;

                    div {
                        height: 100%;
                        text-align: center;
                        line-height: 40px;
                        font-size: 1.1rem;
                        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
                    }

                    .system {
                        background-color: #8b8b8b;
                    }

                    .user {
                        background-color: #81679f;
                    }

                    .ai {
                        background-color: #679f92;
                        font-size: 0.9rem;
                    }
                }

                .links {
                    position: absolute;
                    top: calc(100% - 20px);
                    left: 150px;
                    display: flex;
                    flex-direction: column;
                    z-index: 1;

                    > a {
                        color: white;

                        &:hover {
                            color: gray;
                        }
                    }
                }
            }

            .content {
                padding: 0 20px;
                border-radius: 10px;
                margin: 0 10px;
            }

            :deep(.content) > :not(ol):not(ul):not(pre):last-child:after,
            :deep(.content) > ol:last-child li:last-child:after,
            :deep(.content) > pre:last-child code:after,
            :deep(.content) > ul:last-child li:last-child:after {
                content: "";
                display: inline-block;
                width: 8px;
                height: 15px;
                background-color: var(--text-color);
                animation: blink 1s steps(5, start) infinite;
                transform: translateY(3px);
            }

            @keyframes blink {
                to {
                    visibility: hidden;
                }
            }

            :deep(.end) * {
                &::after {
                    display: none !important;
                }
            }
        }

        .print {
            height: auto !important;
            overflow-y: initial !important;
        }

        #home {
            height: 100%;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;

            > div {
                transform: translateY(-150px);

                > p {
                    font-size: 2rem;
                    margin-bottom: 20px;
                    color: var(--text-color);
                }

                .content {
                    a {
                        color: rgb(0, 174, 255);
                    }
                }
            }
        }
    }
}

.print {
    height: auto !important;
    overflow-y: initial !important;
}

@media screen and (max-width: 1000px) {
    #sidebar {
        position: absolute !important;
        transform: translateX(-100%);

        #showBtn {
            visibility: visible !important;
        }
    }

    #messages {
        > div {
            padding: 25px 50px !important;
        }
    }
}

@media screen and (max-width: 700px) {
    #messages {
        > div {
            padding: 25px 20px !important;
        }
    }

    #chats .list > div span {
        opacity: 1 !important;
        visibility: visible !important;
        transform: translateX(0) !important;
        color: red !important;
    }
}

@media screen and (max-width: 450px) {
    #messages {
        > div {
            padding: 25px 10px !important;
        }
    }
}
</style>
