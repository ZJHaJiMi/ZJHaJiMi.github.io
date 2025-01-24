// @author yingyu5658
// 魔怔程度 后面计算用
var level = 0;
var number = 0;
console.log('level: ' + level);
console.log('number: ' + number);
// 获取到题目输出区域
var topicOutputArea = document.getElementById('topic');

// 存储题目的数组
let topics = new Array(
  '2. 走神时会回想刚刚游玩的音游铺面',
  '3. 相对于其他游戏而言，你游玩音乐游戏的时长更长',
  '4. 除了音游之外，你没有游玩其他游戏的欲望',
  '5. 在各大视频网站的投稿中，音游居多',
  '6. 音乐播放器歌单中，很多音游曲',
  '7. 你会在地铁/公交车等场所打音游',
  '8. 有向身边不玩音游的朋友推荐音游的想法',
  '9. 头像是某个音游的元素',
  '10. QQ/微信群加了很多音游群，并很活跃',
  '您已答完全部题目'
);

// 完全不同意
document
  .getElementById('stronglyDisagree')
  .addEventListener('click', function () {
    changeTheTopics(number);
    if (number <= topics.length) {
      level = level - 2;
      console.log('level: ' + level);
      console.log('number: ' + number);
    }
  });

// 比较不同意
document.getElementById('disagree').addEventListener('click', function () {
  changeTheTopics(number);
  if (number <= topics.length) {
    level = level - 1;
    console.log('level: ' + level);
    console.log('number: ' + number);
  }
});
// 中立
document.getElementById('neutral').addEventListener('click', function () {
  changeTheTopics(number);
  if (number <= topics.length) {
    level = level + 0;
    console.log('level: ' + level);
    console.log('number: ' + number);
  }
});
// 比较同意
document.getElementById('agree').addEventListener('click', function () {
  changeTheTopics(number);
  if (number <= topics.length) {
    level = level + 1;
    console.log('level: ' + level);
    console.log('number: ' + number);
  }
});
// 非常同意
document.getElementById('stronglyAgree').addEventListener('click', function () {
  changeTheTopics(number);
  if (number <= topics.length) {
    level = level + 2;
    console.log('level: ' + level);
    console.log('number: ' + number);
  }
});

// 题目切换
function changeTheTopics(functionNumber) {
  functionNumber = number;
  document.getElementById('topic').textContent = topics[functionNumber];
  number++;
  if (number > 9) {
    let buttonSetNone = document.getElementsByTagName('button');
    for (let i = 0; i < buttonSetNone.length; i++) {
      buttonSetNone[i].style.display = 'none';
      settlement(level);
    }
  }
}

// 根据得分对页面进行跳转
// 根据得分对页面进行跳转（核心修复部分）
function settlement(level) {
  if (level <= -10) {
    // -∞ ~ -10 → m20ToM10
    window.location.href = '../html/m20ToM10.html';
  } else if (level <= 0) {
    // -9 ~ 0 → m10To0
    window.location.href = '../html/m10To0.html';
  } else if (level < 10) {
    // 1 ~ 9 → _0To10
    window.location.href = '../html/_0To10.html';
  } else {
    // 10 ~ +∞ → _10To20
    window.location.href = '../html/_10To20.html';
  }
}
