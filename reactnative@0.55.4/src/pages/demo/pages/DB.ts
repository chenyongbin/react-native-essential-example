const StoryList = ["武林外传", "Friends", "请回答1988"];

const WulinWaiZhuan = [
    "佟掌柜",
    "白展堂",
    "郭芙蓉",
    "吕轻侯",
    "李秀莲",
    "莫小贝",
    "邢育森",
    "燕小六",
    "祝无双",
  ],
  Friends = [
    "Monica Geller",
    "Ross Geller",
    "Rachel Green",
    "Phoebe Buffay",
    "Joey Tribbiani",
    "Chandler Bing",
  ],
  PleaseAnswer1988 = [
    "成德善",
    "金正焕",
    "成善宇",
    "成宝拉",
    "金正峰",
    "刘东龙",
    "崔泽",
  ];

const getStoryList = () => StoryList;

const getRoleList = (storyIndex: number) => {
  switch (storyIndex) {
    case 0:
      return WulinWaiZhuan;
    case 1:
      return Friends;
    case 2:
      return PleaseAnswer1988;
    default:
      return [];
  }
};

export { getStoryList, getRoleList };
