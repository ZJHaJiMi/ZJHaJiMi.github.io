let times = 0;
const output = document.getElementById('output');
const asciiArt = document.getElementById('ascii-art');
const dateElement = document.getElementById('date');

function clearScreen() {
  output.innerHTML = '';
}

function print(text) {
  output.textContent += text + '\n';
}

function executeCommand() {
  const commandLine = document.getElementById('command-line').value.trim();
  if (times === 0) {
    displayAsciiArt();
  }
  updateDate();
  handleCommand(commandLine);
  times++;
  print(`*调试信息* 运行轮数： ${times}`);
  document.getElementById('command-line').value = '';
}

function displayAsciiArt() {
  const art = ` __       __    __  .______    __    __   __       __    __                                                                                                                       \n|  |     |  |  |  | |   _  \\  |  |  |  | |  |     |  |  |  |                                                                                                                      \n|  |     |  |  |  | |  |_)  | |  |  |  | |  |     |  |  |  |                                                                                                                      \n|  |     |  |  |  | |   _  <  |  |  |  | |  |     |  |  |  |                                                                                                                      \n|  \`----.|  \`--'  | |  |_)  | |  \`--'  | |  \`----.|  \`--'  |                                                                                                                      \n|_______| \\______/  |______/   \\______/  |_______| \\______/                                                                                                                       \n                                                                                                                                                                                  \n.___  ___.      ___       _______   _______          .______   ____    ____          ____    ____  __  .__   __.   ___________    ____  __    __   _____     __    _____    ___   \n|   \\/   |     /   \\     |       \\ |   ____|         |   _  \\  \\   \\  /   /          \\   \\  /   / |  | |  \\ |  |  /  _____\\   \\  /   / |  |  |  | | ____|   / /   | ____|  / _ \\  \n|  \\  /  |    /  ^  \\    |  .--.  ||  |__            |  |_)  |  \\   \\/   /            \\   \\/   /  |  | |   \\|  | |  |  __  \\   \\/   /  |  |  |  | | |__    / /_   | |__   | (_) | \n|  |\\/|  |   /  /_\\  \\   |  |  |  ||   __|           |   _  <    \\_    _/              \\_    _/   |  | |  . \`  | |  | |_ |  \\_    _/   |  |  |  | |___ \\  | '_ \\  |___ \\   > _ <  \n|  |  |  |  /  _____  \\  |  '--'  ||  |____          |  |_)  |     |  |                  |  |     |  | |  |\\   | |  |__| |    |  |     |  \`--'  |  ___) | | (_) |  ___) | | (_) | \n|__|  |__| /__/     \\__\\ |_______/ |_______|         |______/      |__|                  |__|     |__| |__| \\__|  \\______|    |__|      \\______/  |____/   \\___/  |____/   \\___/  \n`;
  asciiArt.textContent = art;
}

function updateDate() {
  const now = new Date().toLocaleDateString();
  dateElement.textContent = `你在${now}奇了星雨并打开本软件，来看看老天让不让你卢吧！`;
}

function help() {
  clearScreen();
  print("===帮助页面===");
  print("'lbl' 询问老天是否开卢");
  print("'coott' 进入二选一模式");
  print("'exit' 退出");
  print("'cofm' 进入多选一模式");
}

function lbl() {
  clearScreen();
  const result = Math.random() >= 0.5;
  if (result) {
    print("------------------------------------");
    print("疯狂的鹿，不停的蛇，浓厚的鲸！！！！！");
    print("------------------------------------");
  } else {
    print("------------------------------------");
    print("别让欲望击穿你的意志！");
    print("------------------------------------");
  }
}

function coott() {
  clearScreen();
  const one = prompt("请输入您的第一个选项。");
  const two = prompt("请输入您的第二个选项。");
  const choice = Math.random() >= 0.5 ? one : two;
  print(`老天帮你选了：${choice}`);
  print("========================================");
}

function cofm() {
  clearScreen();
  print("===多选一界面===");
  const choicesCount = parseInt(prompt("请输入选项总数"), 10);
  let choicesList = [];
  for (let i = 1; i <= choicesCount; ++i) {
    const choice = prompt(`请输入您的第${i}个选项`);
    if (choice !== null && choice !== '') {
      choicesList.push(choice);
    }
  }
  if (choicesList.length > 0) {
    const randomIndex = Math.floor(Math.random() * choicesList.length);
    print(`老天帮你选了第${randomIndex + 1}个：${choicesList[randomIndex]}`);
  }
}

function handleCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case 'help':
      help();
      break;
    case 'lbl':
      lbl();
      break;
    case 'coott':
      coott();
      break;
    case 'cofm':
      cofm();
      break;
    case 'exit':
      alert('感谢使用卢布卢！');
      window.close();
      break;
    default:
      clearScreen();
      print("不存在该指令！将在1000ms后回到主页面。");
      setTimeout(() => {
        clearScreen();
        displayAsciiArt();
        updateDate();
      }, 1000);
  }
}

// 初始化应用
displayAsciiArt();
updateDate();