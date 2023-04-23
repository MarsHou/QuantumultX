if ($response.body) {
  $done({
      body: JSON.stringify({
          "product_infos": [{
              "product_id": "5210897752128663390",
              "start_time": 1417260485,
              "end_time": 2147483648,
              "buy_time": "1417260485",
              "cluster": "offlinedl",
              "status": "0",
              "function_num": 2,
              "buy_description": "离线下载套餐(永久)",
              "product_description": "离线下载套餐(永久)",
              "detail_cluster": "offlinedl",
              "product_name": "offlinedl_permanent"
          }, {
              "product_name": "svip2_nd",
              "cur_svip_type": "year",
              "product_description": "超级会员",
              "function_num": 0,
              "start_time": 1553702399,
              "buy_description": "",
              "buy_time": 0,
              "product_id": "1",
              "auto_upgrade_to_svip": 0,
              "end_time": 1872502399,
              "cluster": "vip",
              "detail_cluster": "svip",
              "status": 0
          }, {
              "product_name": "contentvip_nd",
              "product_description": "",
              "function_num": 0,
              "start_time": 1669305599,
              "buy_description": "",
              "buy_time": 0,
              "product_id": "",
              "auto_upgrade_to_svip": 0,
              "end_time": 1700841599,
              "cluster": "contentvip",
              "detail_cluster": "contentvip",
              "status": 0
            }],
            "center_skip_config": {
              "action_type": 0,
              "action_url": "https:\/\/pan.baidu.com\/buy\/center?tag=8"
            },
            "last_privilege_card_v2": {
            },
            "current_privilege_card": [
            ],
            "current_product_v2": {
              "product_id": "1838062032397226670",
              "detail_cluster": "svip",
              "cluster": "vip",
              "product_type": "vip2_1y"
            },
            "request_id": 302155799249959025,
            "current_privilege_card_v2": {
            },
            "up_product_infos": [
            ],
            "last_privilege_card": [
            ],
            "level_info": {
              "history_value": 64606,
              "current_level": 10,
              "last_manual_collection_time": 0,
              "current_value": 65176,
              "history_level": 10,
              "v10_id": ""
            },
            "user_tag": "{\"has_buy_record\":1,\"has_buy_vip_svip_record\":1,\"last_buy_record_creat_time\":1667268609,\"is_vip\":0,\"is_svip\":1,\"last_vip_type\":1,\"last_vip_svip_end_time\":1700841599,\"is_svip_sign\":0,\"notice_user_type\":2,\"notice_user_status\":3,\"is_first_act\":0}",
            "currenttime": 1682217952,
            "previous_product": [
            ],
            "current_mvip_v2": {
            },
            "current_product": {
              "product_id": "1838062032397226670",
              "detail_cluster": "svip",
              "cluster": "vip",
              "product_type": "vip2_1y"
            },
            "reminder": {
              "reminderWithContent": [
              ],
              "advertiseContent": [
              ],
              "svip": {
                "leftseconds": 18623647,
                "nextState": "normal"
              }
            },
            "current_mvip": [
            ],
            "previous_product_v2": {
            }
      })
  });
} else {
  $done({});
}