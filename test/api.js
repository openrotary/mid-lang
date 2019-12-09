// 招呼社区APP API 代码

const qs = require("qs");
export const ajaxName0 = ({
  xqOrgID,
  houseID,
  repairType,
  repairImages,
  repairContent,
  userPhone,
  bookTime
}) => {
  // 添加报修任务
  if (!xqOrgID) {
    throw Error("添加报修任务 接口缺失参数 xqOrgID");
  }
  if (!houseID) {
    throw Error("添加报修任务 接口缺失参数 houseID");
  }
  if (!repairType) {
    throw Error("添加报修任务 接口缺失参数 repairType");
  }
  if (!repairImages) {
    throw Error("添加报修任务 接口缺失参数 repairImages");
  }
  if (!repairContent) {
    throw Error("添加报修任务 接口缺失参数 repairContent");
  }
  if (!userPhone) {
    throw Error("添加报修任务 接口缺失参数 userPhone");
  }
  if (!bookTime) {
    throw Error("添加报修任务 接口缺失参数 bookTime");
  }
  axios
    .post("/v1/repair/saveRepair", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName1 = ({ uid }) => {
  // 物业详情
  if (!uid) {
    throw Error("物业详情 接口缺失参数 uid");
  }
  axios
    .post("/v1/wy/detail", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName2 = ({ messageId }) => {
  // 邻里-收藏-取消收藏
  if (!messageId) {
    throw Error("邻里-收藏-取消收藏 接口缺失参数 messageId");
  }
  axios
    .post("/v1/near/collect/delete", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName3 = ({ current, size }) => {
  // 邻里-消息-我点赞的
  if (!current) {
    throw Error("邻里-消息-我点赞的 接口缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-我点赞的 接口缺失参数 size");
  }
  axios
    .post("/v1/near/message/listByMyPraise", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName4 = ({ current, size }) => {
  // 邻里-消息-我评论的
  if (!current) {
    throw Error("邻里-消息-我评论的 接口缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-我评论的 接口缺失参数 size");
  }
  axios
    .post("/v1/near/message/listByMyComment", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName5 = ({ uid }) => {
  // 邻里-消息-消息详情
  if (!uid) {
    throw Error("邻里-消息-消息详情 接口缺失参数 uid");
  }
  axios
    .get("/v1/near/message/get" + "?" + qs.stringify({ uid }), {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName6 = () => {
  // 反馈列表未读消息数

  axios
    .get("/v1/feedback/getUnreadNum", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName7 = ({ houseId, month }) => {
  // 业主端-缴费-账单详情
  if (!houseId) {
    throw Error("业主端-缴费-账单详情 接口缺失参数 houseId");
  }
  if (!month) {
    throw Error("业主端-缴费-账单详情 接口缺失参数 month");
  }
  axios
    .post("/v1/cost/bill/detail", {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName8 = () => {
  // 添加发票信息

  axios
    .post("/v1/house/invoice/add", {
      headers: {
        "Content-Type": "application/json",
        imei: "UYT0217C28009256"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName9 = () => {
  // 邻里-消息-发布评论

  axios
    .post("/v1/near/comment/save", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName10 = () => {
  // 获取个人登录信息接口

  axios
    .post("/v1/appUser/me", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "WFF0216B17000855",
        token: "{{token}}"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName11 = ({ houseId, isComplete, current }) => {
  // 业主端-缴费-待缴列表
  if (!houseId) {
    throw Error("业主端-缴费-待缴列表 接口缺失参数 houseId");
  }
  if (!isComplete) {
    throw Error("业主端-缴费-待缴列表 接口缺失参数 isComplete");
  }
  if (!current) {
    throw Error("业主端-缴费-待缴列表 接口缺失参数 current");
  }
  axios
    .post("/v1/cost/bill/list", {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName12 = ({ houseId, month, payType, device }) => {
  // 业主端-缴费-创建订单
  if (!houseId) {
    throw Error("业主端-缴费-创建订单 接口缺失参数 houseId");
  }
  if (!month) {
    throw Error("业主端-缴费-创建订单 接口缺失参数 month");
  }
  if (!payType) {
    throw Error("业主端-缴费-创建订单 接口缺失参数 payType");
  }
  if (!device) {
    throw Error("业主端-缴费-创建订单 接口缺失参数 device");
  }
  axios
    .post("/v1/cost/bill/createOrder", {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName13 = ({ xqId, houseId }) => {
  // 获取未读消息条数
  if (!xqId) {
    throw Error("获取未读消息条数 接口缺失参数 xqId");
  }
  if (!houseId) {
    throw Error("获取未读消息条数 接口缺失参数 houseId");
  }
  axios
    .get("/v1/notification/num" + "?" + qs.stringify({ xqId, houseId }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "WFF0216B17000855"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName14 = ({ status, pageNO, pageSize }) => {
  // 我的房屋信息
  if (!status) {
    throw Error("我的房屋信息 接口缺失参数 status");
  }
  if (!pageNO) {
    throw Error("我的房屋信息 接口缺失参数 pageNO");
  }
  if (!pageSize) {
    throw Error("我的房屋信息 接口缺失参数 pageSize");
  }
  axios
    .post("/v1/houseUser/getMyHouse", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName15 = () => {
  // 删除发票接口

  axios
    .post("/v1/house/invoice/delete/1195558735389396993", {
      headers: {
        "Content-Type": "application/json",
        imei: "WFF0216B17000855"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName16 = ({ xqId }) => {
  // 首页
  if (!xqId) {
    throw Error("首页 接口缺失参数 xqId");
  }
  axios
    .get("/v1/index/datas" + "?" + qs.stringify({ xqId }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "WFF0216B17000855"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName17 = () => {
  // 编辑发票信息

  axios
    .post("/v1/house/invoice/edit", {
      headers: {
        "Content-Type": "application/json",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName18 = ({ current, size }) => {
  // 邻里-消息-我收藏的
  if (!current) {
    throw Error("邻里-消息-我收藏的 接口缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-我收藏的 接口缺失参数 size");
  }
  axios
    .post("/v1/near/message/listByMyCollect", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName19 = () => {
  // 报修列表未读消息数

  axios
    .get("/v1/repair/getUnreadNum", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "96843153-D1CC-4C3B-BA6D-FE65F85F338D"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName20 = ({ mobile }) => {
  // 发送验证码
  if (!mobile) {
    throw Error("发送验证码 接口缺失参数 mobile");
  }
  axios
    .get("/v1/code/sms" + "?" + qs.stringify({ mobile }), {
      headers: {
        deviceId: "15602535911",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName21 = () => {
  // 小区公告列表

  axios
    .post("/v1/xq/noticeList", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "WFF0216B17000855"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName22 = ({ current, size, userId }) => {
  // 邻里-消息-某用户消息列表
  if (!current) {
    throw Error("邻里-消息-某用户消息列表 接口缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-某用户消息列表 接口缺失参数 size");
  }
  if (!userId) {
    throw Error("邻里-消息-某用户消息列表 接口缺失参数 userId");
  }
  axios
    .post("/v1/near/message/listByUserId", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName23 = ({ houseId, month, payType, device }) => {
  // 10.71.1.36:8084/v1/cost/bill/createOrder
  if (!houseId) {
    throw Error(
      "10.71.1.36:8084/v1/cost/bill/createOrder 接口缺失参数 houseId"
    );
  }
  if (!month) {
    throw Error("10.71.1.36:8084/v1/cost/bill/createOrder 接口缺失参数 month");
  }
  if (!payType) {
    throw Error(
      "10.71.1.36:8084/v1/cost/bill/createOrder 接口缺失参数 payType"
    );
  }
  if (!device) {
    throw Error("10.71.1.36:8084/v1/cost/bill/createOrder 接口缺失参数 device");
  }
  axios
    .post("10.71.1.36:8084/v1/cost/bill/createOrder", {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName24 = ({ uid }) => {
  // 小区公告详情
  if (!uid) {
    throw Error("小区公告详情 接口缺失参数 uid");
  }
  axios
    .post("/v1/xq/noticeDetail", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName25 = ({ current, size, xqId, typeKey }) => {
  // 邻里-消息-列表
  if (!current) {
    throw Error("邻里-消息-列表 接口缺失参数 current");
  }
  if (!size) {
    throw Error("邻里-消息-列表 接口缺失参数 size");
  }
  if (!xqId) {
    throw Error("邻里-消息-列表 接口缺失参数 xqId");
  }
  if (!typeKey) {
    throw Error("邻里-消息-列表 接口缺失参数 typeKey");
  }
  axios
    .get(
      "/v1/near/message/list" +
        "?" +
        qs.stringify({ current, size, xqId, typeKey }),
      {
        headers: {}
      }
    )
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName26 = ({ mainId, type }) => {
  // 邻里-点赞-点赞
  if (!mainId) {
    throw Error("邻里-点赞-点赞 接口缺失参数 mainId");
  }
  if (!type) {
    throw Error("邻里-点赞-点赞 接口缺失参数 type");
  }
  axios
    .post("/v1/near/praise/save", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName27 = ({ houseId, current }) => {
  // 业主端-缴费-历史账单
  if (!houseId) {
    throw Error("业主端-缴费-历史账单 接口缺失参数 houseId");
  }
  if (!current) {
    throw Error("业主端-缴费-历史账单 接口缺失参数 current");
  }
  axios
    .post("/v1/cost/bill/listYear", {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName28 = ({ startTime, endTime }) => {
  // 房屋验收报修单列表
  if (!startTime) {
    throw Error("房屋验收报修单列表 接口缺失参数 startTime");
  }
  if (!endTime) {
    throw Error("房屋验收报修单列表 接口缺失参数 endTime");
  }
  axios
    .get(
      "/v1/house/acceptance/page" + "?" + qs.stringify({ startTime, endTime }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          imei: "WFF0216B17000855"
        }
      }
    )
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName29 = () => {
  // 业主端-反馈-提交反馈

  axios
    .post("/v1/feedback/save", {
      headers: {
        "Content-Type": "application/json",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName30 = () => {
  // 房屋验收报修 验收

  axios
    .post("/v1/house/acceptance/acceptance", {
      headers: {
        "Content-Type": "application/json",
        imei: "WFF0216B17000855"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName31 = ({ grant_type, refresh_token }) => {
  // 刷新token
  if (!grant_type) {
    throw Error("刷新token 接口缺失参数 grant_type");
  }
  if (!refresh_token) {
    throw Error("刷新token 接口缺失参数 refresh_token");
  }
  axios
    .post("/oauth/token", {
      headers: {
        Authorization: "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName32 = ({ current }) => {
  // 邻里-消息-我的消息列表
  if (!current) {
    throw Error("邻里-消息-我的消息列表 接口缺失参数 current");
  }
  axios
    .post("/v1/near/message/messageList", {
      headers: {}
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName33 = () => {
  // 第三方openId注册

  axios
    .post("/v1/appUser/social/registerByOpenId", {
      headers: {
        Authorization: "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6",
        "Content-Type": "application/json",
        deviceId: "15602535911"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName34 = ({ id }) => {
  // 业主端-反馈-详情
  if (!id) {
    throw Error("业主端-反馈-详情 接口缺失参数 id");
  }
  axios
    .post("/v1/feedback/detail", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName35 = () => {
  // 业主端-反馈-回复

  axios
    .post("/v1/feedback/reply", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName36 = ({ status, pageNO, pageSize }) => {
  // 我的报修列表
  if (!status) {
    throw Error("我的报修列表 接口缺失参数 status");
  }
  if (!pageNO) {
    throw Error("我的报修列表 接口缺失参数 pageNO");
  }
  if (!pageSize) {
    throw Error("我的报修列表 接口缺失参数 pageSize");
  }
  axios
    .post("/v1/repair/getMyRepair", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "UYT0217C28009256"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName37 = () => {
  // 邻里-消息-发布消息

  axios
    .post("/v1/near/message/save", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName38 = ({ openId, providerId }) => {
  // 第三方openId登录
  if (!openId) {
    throw Error("第三方openId登录 接口缺失参数 openId");
  }
  if (!providerId) {
    throw Error("第三方openId登录 接口缺失参数 providerId");
  }
  axios
    .post("/v1/authentication/openId", {
      headers: {
        Authorization: "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName39 = ({ mainId, type }) => {
  // 邻里-点赞-取消点赞
  if (!mainId) {
    throw Error("邻里-点赞-取消点赞 接口缺失参数 mainId");
  }
  if (!type) {
    throw Error("邻里-点赞-取消点赞 接口缺失参数 type");
  }
  axios
    .post("/v1/near/praise/delete", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName40 = ({ username, password, grant_type }) => {
  // 登录
  if (!username) {
    throw Error("登录 接口缺失参数 username");
  }
  if (!password) {
    throw Error("登录 接口缺失参数 password");
  }
  if (!grant_type) {
    throw Error("登录 接口缺失参数 grant_type");
  }
  axios
    .post("/v1/authentication/login", {
      headers: {
        Authorization: "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName41 = ({ xqId, current, categoryId }) => {
  // 常用查询
  if (!xqId) {
    throw Error("常用查询 接口缺失参数 xqId");
  }
  if (!current) {
    throw Error("常用查询 接口缺失参数 current");
  }
  if (!categoryId) {
    throw Error("常用查询 接口缺失参数 categoryId");
  }
  axios
    .post("/v1/xq/contact", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName42 = () => {
  // 常用查询分类

  axios
    .post("/v1/xq/contactCategory", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName43 = ({ uid }) => {
  // 获取报修详情
  if (!uid) {
    throw Error("获取报修详情 接口缺失参数 uid");
  }
  axios
    .post("/v1/repair/getRepairDetail", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName44 = ({ messageId }) => {
  // 邻里-收藏-收藏
  if (!messageId) {
    throw Error("邻里-收藏-收藏 接口缺失参数 messageId");
  }
  axios
    .post("/v1/near/collect/save", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName45 = () => {
  // 业主端-反馈-列表

  axios
    .post("/v1/feedback/list", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "AEC48EDF-AF4F-4B06-B931-0190744C99C6"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
export const ajaxName46 = () => {
  // 查看发票信息

  axios
    .get("/v1/house/invoice/detail/1146613112800022530", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        imei: "WFF0216B17000855"
      }
    })
    .then(res => res)
    .catch(err => console.error(err));
};
