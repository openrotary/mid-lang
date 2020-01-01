// 招呼社区APP 项目 API代码
import qs from "qs";

import $axios from "../http";

export const ajaxName1 = (
  {
    xqOrgID,
    houseID,
    repairType,
    repairImages,
    repairContent,
    userPhone,
    bookTime
  },
  config = {}
) => {
  // 添加报修任务   01f79a0f-4840-49b3-8e57-8c5fd1ee8354
  if (!xqOrgID) {
    throw Error("添加报修任务 请求缺失参数 xqOrgID");
  }
  if (!houseID) {
    throw Error("添加报修任务 请求缺失参数 houseID");
  }
  if (!repairType) {
    throw Error("添加报修任务 请求缺失参数 repairType");
  }
  if (!repairImages) {
    throw Error("添加报修任务 请求缺失参数 repairImages");
  }
  if (!repairContent) {
    throw Error("添加报修任务 请求缺失参数 repairContent");
  }
  if (!userPhone) {
    throw Error("添加报修任务 请求缺失参数 userPhone");
  }
  if (!bookTime) {
    throw Error("添加报修任务 请求缺失参数 bookTime");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("添加报修任务 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/repair/saveRepair",
        qs.stringify({
          xqOrgID,
          houseID,
          repairType,
          repairImages,
          repairContent,
          userPhone,
          bookTime
        }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName2 = ({ uid }, config = {}) => {
  // 物业详情   0b059658-bb7e-4694-8a9f-8584709d4370
  if (!uid) {
    throw Error("物业详情 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/wy/detail",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName3 = ({ messageId }, config = {}) => {
  // 邻里-收藏-取消收藏   0c4d8721-1ad3-40d8-85be-2c0113d14edf
  if (!messageId) {
    throw Error("邻里-收藏-取消收藏 请求缺失参数 messageId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/collect/delete",
        qs.stringify({ messageId }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName4 = ({ current, size }, config = {}) => {
  // 邻里-消息-我点赞的   11ad9763-816f-4c02-a5a6-1cf9f3a7c508
  if (!current) {
    throw Error("邻里-消息-我点赞的 请求缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-我点赞的 请求缺失参数 size");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/listByMyPraise",
        qs.stringify({ current, size }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName5 = ({ current, size }, config = {}) => {
  // 邻里-消息-我评论的   15a5b9a8-3b0b-437e-a130-76c02502ef25
  if (!current) {
    throw Error("邻里-消息-我评论的 请求缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-我评论的 请求缺失参数 size");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/listByMyComment",
        qs.stringify({ current, size }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName6 = ({ uid }, config = {}) => {
  // 邻里-消息-消息详情   2a13bebe-2510-40ef-8135-e8360cc0eb1c
  if (!uid) {
    throw Error("邻里-消息-消息详情 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/near/message/get",
        { params: { uid } },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName7 = ({ status, pageNO, pageSize }, config = {}) => {
  // 反馈列表未读消息数   2a9c40b6-e14f-40cd-8200-a9dbb526fcf8
  if (!status) {
    throw Error("反馈列表未读消息数 请求缺失参数 status");
  }
  if (!pageNO) {
    throw Error("反馈列表未读消息数 请求缺失参数 pageNO");
  }
  if (!pageSize) {
    throw Error("反馈列表未读消息数 请求缺失参数 pageSize");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("反馈列表未读消息数 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/feedback/getUnreadNum",
        { params: { status, pageNO, pageSize } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName8 = ({ houseId, month }, config = {}) => {
  // 业主端-缴费-账单详情   304800aa-bf01-4665-bbda-3f310c47def2
  if (!houseId) {
    throw Error("业主端-缴费-账单详情 请求缺失参数 houseId");
  }
  if (!month) {
    throw Error("业主端-缴费-账单详情 请求缺失参数 month");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/detail",
        { houseId, month },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName9 = (config = {}) => {
  // 添加发票信息   3a46a395-4956-483b-a09b-0a240fae565c

  if (!config.headers || !config.headers.imei) {
    throw Error("添加发票信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/invoice/add",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName10 = (config = {}) => {
  // 邻里-消息-发布评论   3b2c8b29-961b-4e4d-8c4d-2e43e2dbca0c

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/comment/save",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName11 = (config = {}) => {
  // 获取个人登录信息接口   3b7a2180-1543-51d8-a798-bdb736497f84

  if (!config.headers || !config.headers.imei) {
    throw Error("获取个人登录信息接口 缺失头请求参数 imei");
  }
  if (!config.headers || !config.headers.token) {
    throw Error("获取个人登录信息接口 缺失头请求参数 token");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/me",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName12 = ({ houseId, isComplete, current }, config = {}) => {
  // 业主端-缴费-待缴列表   411db0a4-53e5-4a67-80bb-b36cee1506fc
  if (!houseId) {
    throw Error("业主端-缴费-待缴列表 请求缺失参数 houseId");
  }
  if (!isComplete) {
    throw Error("业主端-缴费-待缴列表 请求缺失参数 isComplete");
  }
  if (!current) {
    throw Error("业主端-缴费-待缴列表 请求缺失参数 current");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/list",
        { houseId, isComplete, current },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName13 = (
  { houseId, month, payType, device },
  config = {}
) => {
  // 业主端-缴费-创建订单   4323c78a-2c30-473f-912b-e5bc2d198dd2
  if (!houseId) {
    throw Error("业主端-缴费-创建订单 请求缺失参数 houseId");
  }
  if (!month) {
    throw Error("业主端-缴费-创建订单 请求缺失参数 month");
  }
  if (!payType) {
    throw Error("业主端-缴费-创建订单 请求缺失参数 payType");
  }
  if (!device) {
    throw Error("业主端-缴费-创建订单 请求缺失参数 device");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/createOrder",
        { houseId, month, payType, device },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName14 = ({ xqId, houseId }, config = {}) => {
  // 获取未读消息条数   48792328-6fda-4c32-9fde-ca4ef5b3486b
  if (!xqId) {
    throw Error("获取未读消息条数 请求缺失参数 xqId");
  }
  if (!houseId) {
    throw Error("获取未读消息条数 请求缺失参数 houseId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("获取未读消息条数 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/notification/num",
        { params: { xqId, houseId } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName15 = ({ status, pageNO, pageSize }, config = {}) => {
  // 我的房屋信息   4934c523-96c7-41b0-9d21-09bb94eeff33
  if (!status) {
    throw Error("我的房屋信息 请求缺失参数 status");
  }
  if (!pageNO) {
    throw Error("我的房屋信息 请求缺失参数 pageNO");
  }
  if (!pageSize) {
    throw Error("我的房屋信息 请求缺失参数 pageSize");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("我的房屋信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/getMyHouse",
        qs.stringify({ status, pageNO, pageSize }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName16 = (uid, config = {}) => {
  // 删除发票接口   51f184f4-0236-45c5-b543-46ae64d7690e
  if (!uid) {
    throw Error("删除发票接口 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("删除发票接口 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        `/v1/house/invoice/delete/${uid}`,
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName17 = ({ xqId }, config = {}) => {
  // 首页   55aa8c2f-7acb-4336-a54a-0b222cb6c5ac
  if (!xqId) {
    throw Error("首页 请求缺失参数 xqId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("首页 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/index/datas",
        { params: { xqId } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName18 = (config = {}) => {
  // 编辑发票信息   56567e3a-f912-4144-817a-cb9d7880cd3c

  if (!config.headers || !config.headers.imei) {
    throw Error("编辑发票信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/invoice/edit",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName19 = ({ current, size }, config = {}) => {
  // 邻里-消息-我收藏的   5b69df91-17e7-4d49-b5f1-fb41dd0054d3
  if (!current) {
    throw Error("邻里-消息-我收藏的 请求缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-我收藏的 请求缺失参数 size");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/listByMyCollect",
        qs.stringify({ current, size }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName20 = (config = {}) => {
  // 报修列表未读消息数   5df16cc1-d8c9-4345-94b1-afde7fc77d53

  if (!config.headers || !config.headers.imei) {
    throw Error("报修列表未读消息数 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/repair/getUnreadNum",
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName21 = ({ mobile }, config = {}) => {
  // 发送验证码   5f35d07a-bf97-404f-a79a-9410d4b20509
  if (!mobile) {
    throw Error("发送验证码 请求缺失参数 mobile");
  }
  if (!config.headers || !config.headers.deviceId) {
    throw Error("发送验证码 缺失头请求参数 deviceId");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/code/sms",
        { params: { mobile } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName22 = (config = {}) => {
  // 小区公告列表   73a47e7f-df09-4a5a-9c44-74ecfc207c80

  if (!config.headers || !config.headers.imei) {
    throw Error("小区公告列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/noticeList",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName23 = ({ current, size, userId }, config = {}) => {
  // 邻里-消息-某用户消息列表   74b7dd70-6ad7-4497-ad1b-5df9a22c18a3
  if (!current) {
    throw Error("邻里-消息-某用户消息列表 请求缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-某用户消息列表 请求缺失参数 size");
  }
  if (!userId) {
    throw Error("邻里-消息-某用户消息列表 请求缺失参数 userId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/listByUserId",
        { current, size, userId },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName24 = (
  { houseId, month, payType, device },
  config = {}
) => {
  // 10.71.1.36:8084/v1/cost/bill/createOrder   74c97bf5-c8dd-4cee-9cc8-39ae68c7e8d8
  if (!houseId) {
    throw Error(
      "10.71.1.36:8084/v1/cost/bill/createOrder 请求缺失参数 houseId"
    );
  }
  if (!month) {
    throw Error("10.71.1.36:8084/v1/cost/bill/createOrder 请求缺失参数 month");
  }
  if (!payType) {
    throw Error(
      "10.71.1.36:8084/v1/cost/bill/createOrder 请求缺失参数 payType"
    );
  }
  if (!device) {
    throw Error("10.71.1.36:8084/v1/cost/bill/createOrder 请求缺失参数 device");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "10.71.1.36:8084/v1/cost/bill/createOrder",
        { houseId, month, payType, device },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName25 = ({ uid }, config = {}) => {
  // 小区公告详情   77144c03-a2cb-4761-a5c0-9c1a98200bbf
  if (!uid) {
    throw Error("小区公告详情 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("小区公告详情 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/noticeDetail",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName26 = ({ current, size, xqId, typeKey }, config = {}) => {
  // 邻里-消息-列表   79e19a6d-cbcf-48ed-aa27-8045a2284190
  if (!current) {
    throw Error("邻里-消息-列表 请求缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-列表 请求缺失参数 size");
  }
  if (!xqId) {
    throw Error("邻里-消息-列表 请求缺失参数 xqId");
  }
  if (!typeKey) {
    throw Error("邻里-消息-列表 请求缺失参数 typeKey");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/near/message/list",
        { params: { current, size, xqId, typeKey } },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName27 = ({ mainId, type }, config = {}) => {
  // 邻里-点赞-点赞   80233515-3cc2-402d-b9a5-312c2141d69c
  if (!mainId) {
    throw Error("邻里-点赞-点赞 请求缺失参数 mainId");
  }
  if (!type) {
    throw Error("邻里-点赞-点赞 请求缺失参数 type");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/praise/save",
        qs.stringify({ mainId, type }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName28 = ({ houseId, current }, config = {}) => {
  // 业主端-缴费-历史账单   83290d07-930f-4f38-97dc-847a9191d765
  if (!houseId) {
    throw Error("业主端-缴费-历史账单 请求缺失参数 houseId");
  }
  if (!current) {
    throw Error("业主端-缴费-历史账单 请求缺失参数 current");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/listYear",
        { houseId, current },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName29 = ({ startTime, endTime }, config = {}) => {
  // 房屋验收报修单列表   8493e141-7ea6-4f57-b461-228e9d4b7f35
  if (!startTime) {
    throw Error("房屋验收报修单列表 请求缺失参数 startTime");
  }
  if (!endTime) {
    throw Error("房屋验收报修单列表 请求缺失参数 endTime");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("房屋验收报修单列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/house/acceptance/page",
        { params: { startTime, endTime } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName30 = (config = {}) => {
  // 业主端-反馈-提交反馈   84ed1ea5-c6f0-4096-a415-4c151803b55b

  if (!config.headers || !config.headers.imei) {
    throw Error("业主端-反馈-提交反馈 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/save",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName31 = (config = {}) => {
  // 房屋验收报修 验收   8ccb544d-67c2-498d-a032-d9357fb76475

  if (!config.headers || !config.headers.imei) {
    throw Error("房屋验收报修 验收 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/acceptance/acceptance",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName32 = ({ grant_type, refresh_token }, config = {}) => {
  // 刷新token   902cfc93-45f8-459b-b61a-887732a2b683
  if (!grant_type) {
    throw Error("刷新token 请求缺失参数 grant_type");
  }
  if (!refresh_token) {
    throw Error("刷新token 请求缺失参数 refresh_token");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/oauth/token",
        qs.stringify({ grant_type, refresh_token }),
        Object.assign(
          {
            headers: {
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName33 = ({ current }, config = {}) => {
  // 邻里-消息-我的消息列表   91578b11-c780-488e-9671-8102a32b2d3a
  if (!current) {
    throw Error("邻里-消息-我的消息列表 请求缺失参数 current");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/messageList",
        { current },
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName34 = ({ smsCode, phone }, config = {}) => {
  // 第三方openId注册   9b403fd7-205a-4e71-a674-87c06386f4ce
  if (!smsCode) {
    throw Error("第三方openId注册 请求缺失参数 smsCode");
  }
  if (!phone) {
    throw Error("第三方openId注册 请求缺失参数 phone");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("第三方openId注册 缺失头请求参数 imei");
  }
  if (!config.headers || !config.headers.deviceId) {
    throw Error("第三方openId注册 缺失头请求参数 deviceId");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/social/registerByOpenId",
        { smsCode, phone },
        Object.assign(
          {
            headers: {
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj",
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName35 = ({ id }, config = {}) => {
  // 业主端-反馈-详情   b16fab62-f135-4b83-997a-b6b59c515e4e
  if (!id) {
    throw Error("业主端-反馈-详情 请求缺失参数 id");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/detail",
        qs.stringify({ id }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName36 = (config = {}) => {
  // 业主端-反馈-回复   b54e6bba-c621-4412-97eb-68ef896bcadf

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/reply",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName37 = ({ status, pageNO, pageSize }, config = {}) => {
  // 我的报修列表   bc879843-937d-426f-a1b8-70a5b45883d5
  if (!status) {
    throw Error("我的报修列表 请求缺失参数 status");
  }
  if (!pageNO) {
    throw Error("我的报修列表 请求缺失参数 pageNO");
  }
  if (!pageSize) {
    throw Error("我的报修列表 请求缺失参数 pageSize");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("我的报修列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/repair/getMyRepair",
        qs.stringify({ status, pageNO, pageSize }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName38 = (config = {}) => {
  // 邻里-消息-发布消息   bd4bff5e-f5f2-4738-a954-22768c97c3f1

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/save",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName39 = ({ openId, providerId }, config = {}) => {
  // 第三方openId登录   db2c5db7-626e-4b18-9a8d-a082ae0db5ae
  if (!openId) {
    throw Error("第三方openId登录 请求缺失参数 openId");
  }
  if (!providerId) {
    throw Error("第三方openId登录 请求缺失参数 providerId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("第三方openId登录 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/authentication/openId",
        qs.stringify({ openId, providerId }),
        Object.assign(
          {
            headers: {
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj",
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName40 = ({ mainId, type }, config = {}) => {
  // 邻里-点赞-取消点赞   de54fe24-3588-44fc-af9d-ac52201875d4
  if (!mainId) {
    throw Error("邻里-点赞-取消点赞 请求缺失参数 mainId");
  }
  if (!type) {
    throw Error("邻里-点赞-取消点赞 请求缺失参数 type");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/praise/delete",
        qs.stringify({ mainId, type }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName41 = ({ username, password, grant_type }, config = {}) => {
  // 登录   e7929de4-5c5f-4758-ac84-7ad9e7afed43
  if (!username) {
    throw Error("登录 请求缺失参数 username");
  }
  if (!password) {
    throw Error("登录 请求缺失参数 password");
  }
  if (!grant_type) {
    throw Error("登录 请求缺失参数 grant_type");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("登录 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/authentication/login",
        qs.stringify({ username, password, grant_type }),
        Object.assign(
          {
            headers: {
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj",
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName42 = ({ xqId, current, categoryId }, config = {}) => {
  // 常用查询   e917c86f-0857-4f01-a309-ba6f187b4379
  if (!xqId) {
    throw Error("常用查询 请求缺失参数 xqId");
  }
  if (!current) {
    throw Error("常用查询 请求缺失参数 current");
  }
  if (!categoryId) {
    throw Error("常用查询 请求缺失参数 categoryId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/contact",
        qs.stringify({ xqId, current, categoryId }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName43 = (config = {}) => {
  // 常用查询分类   e97817a6-2cd8-42dd-9993-0b78e34079f5

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/contactCategory",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName44 = ({ uid }, config = {}) => {
  // 获取报修详情   ea6e7699-8cbb-4e36-88f4-71dda69ec761
  if (!uid) {
    throw Error("获取报修详情 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("获取报修详情 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/repair/getRepairDetail",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName45 = ({ messageId }, config = {}) => {
  // 邻里-收藏-收藏   ed205536-72a4-41ef-8116-e68df972dbd3
  if (!messageId) {
    throw Error("邻里-收藏-收藏 请求缺失参数 messageId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/collect/save",
        qs.stringify({ messageId }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName46 = (config = {}) => {
  // 业主端-反馈-列表   ef608850-5f38-4070-afd3-a1ba4d994833

  if (!config.headers || !config.headers.imei) {
    throw Error("业主端-反馈-列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/list",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export const ajaxName47 = (uid, config = {}) => {
  // 查看发票信息   fe358ba9-f21a-4774-bf94-129f26135dcf
  if (!uid) {
    throw Error("查看发票信息 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("查看发票信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        `/v1/house/invoice/detail/${uid}`,
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};
