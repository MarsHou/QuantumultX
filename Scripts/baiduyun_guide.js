if ($response.body) {
  $done({
      body: JSON.stringify({
"tips_data_list": [
  {
    "title": "实名羡慕你的在线解压",
    "action_url": ""
  },
  {
    "title": "新上线了PDF转Word >",
    "action_url": "bdnetdisk:\/\/n\/action.swan?m_n_v=10.0&swan_app_key=8PPKdfjaGUz2lYS7d3zDvT6Gt2Ct9iVO"
  },
  {
    "title": "为你定制了V8专属福利 >",
    "action_url": "https:\/\/pan.baidu.com\/wap\/vip\/upgrade\/home"
  }
],
"status_data": "超级会员至：2099-11-24",
"guide_data": {
  "action_url": "",
  "title": "超级会员SVIP",
  "title_action_url": "",
  "content": "已拥有V8专属的16T空间等52项特权",
  "button": {
    "text": "等级升级",
    "action_url": "https:\/\/pan.baidu.com\/wap\/vip\/user?from=myvip3#svip"
  }
},
"user_status": 2,
"tips_data": {
  "title": "实名羡慕你的在线解压",
  "action_url": ""
},
"user_type": "svip",
"request_id": 302155885553544623,
"level_info": {
  "last_manual_collection_time": 0,
  "current_max_points": 500,
  "current_value": 65176,
  "history_level": 10,
  "accumulated_uncollected_points": 0,
  "v10_id": "",
  "daily_value": 0,
  "accumulated_day": 0,
  "history_value": 64606,
  "current_level": 10,
  "accumulated_lost_points": 0,
  "default_daily_value": 5
},
"v10_guide": {
  "get_next_value_gap": true,
  "tips": "升级还需要2824成长值，可享更多权益",
  "button": {
    "text": "立即加速",
    "action_url": "https:\/\/pan.baidu.com\/wap\/vip\/user"
  },
  "ab_test": false
},
"status_data_arr": [
  "超级会员至：2099-11-24"
],
"new_guide_data": {
  "action_url": "",
  "title": "超级会员SVIP V10",
  "title_action_url": "",
  "button": {
    "text": "会员中心",
    "action_url": "https:\/\/pan.baidu.com\/wap\/vip\/user?from=myvip3#svip"
  },
  "sub_card_list": [
    {
      "content": "保持V10 52项特权",
      "icon_url": "https:\/\/staticsns.cdn.bcebos.com\/amis\/2022-3\/1646383463592\/%E5%8A%A0%E9%80%9F%E5%8D%87%E7%BA%A7.png",
      "action_url": "https:\/\/pan.baidu.com\/wap\/vip\/user?from=myvip3#svip"
    }
  ]
}
})
  });
} else {
  $done({});
}