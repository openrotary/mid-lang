// 云社区 项目 API代码
import qs from "qs";

import $axios from "../http";

export const HTTP_331ad = (config = {}) => {
  // 首页数据   083cc2ef-df7e-4402-bd87-f4a96f1331ad

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/index/datas",
        {},
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_331ad 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_331ad 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_fef3a = (config = {}) => {
  // 获取用户信息   0b16c9a0-d4fd-44e5-b7a1-a140d37fef3a

  if (!config.headers || !config.headers.imei) {
    throw Error("获取用户信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/me",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_fef3a 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_fef3a 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_5d845 = ({ xqID }, config = {}) => {
  // 得到建筑楼   0d936e16-33a5-4526-a572-bdd0ed85d845
  if (!xqID) {
    throw Error("得到建筑楼 请求缺失参数 xqID");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("得到建筑楼 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/baseorg/buildlist",
        { params: { xqID } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_5d845 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_5d845 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_a17a8 = (config = {}) => {
  // 房屋验证新增   16123f56-2a5f-43ba-8c4d-8b7cf99a17a8

  if (!config.headers || !config.headers.imei) {
    throw Error("房屋验证新增 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/acceptance/add",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_a17a8 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_a17a8 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_353b8 = (
  { xqID, current, size, typeKey, xqId },
  config = {}
) => {
  // 邻里列表   1d22ee8e-8224-4723-b9f9-cecc9c2353b8
  if (!xqID) {
    throw Error("邻里列表 请求缺失参数 xqID");
  }
  if (!current) {
    throw Error("邻里列表 请求缺失参数 current");
  }
  if (!size) {
    throw Error("邻里列表 请求缺失参数 size");
  }
  if (!typeKey) {
    throw Error("邻里列表 请求缺失参数 typeKey");
  }
  if (!xqId) {
    throw Error("邻里列表 请求缺失参数 xqId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("邻里列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/near/message/list",
        { params: { xqID, current, size, typeKey, xqId } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_353b8 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_353b8 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_1764c = ({ uid }, config = {}) => {
  // 设置默认的房屋   2f7420c1-26b4-452d-b864-ded65451764c
  if (!uid) {
    throw Error("设置默认的房屋 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("设置默认的房屋 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/setDefaultHouse",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_1764c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_1764c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_d3b85 = ({ houseId, current }, config = {}) => {
  // 全部账单   35fee201-39a6-4b9b-96bb-e466914d3b85
  if (!houseId) {
    throw Error("全部账单 请求缺失参数 houseId");
  }
  if (!current) {
    throw Error("全部账单 请求缺失参数 current");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("全部账单 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/listYear",
        qs.stringify({ houseId, current }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_d3b85 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_d3b85 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_78397 = (config = {}) => {
  // 得到我的小区列表   3bb83d8c-5c78-457e-9410-f2f880378397

  if (!config.headers || !config.headers.imei) {
    throw Error("得到我的小区列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/baseorg/getMyXqList",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_78397 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_78397 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_1d550 = ({ pwd, smsCode }, config = {}) => {
  // 注册by手机号   3d621f6f-871b-4e96-8d07-93cdbd81d550
  if (!pwd) {
    throw Error("注册by手机号 请求缺失参数 pwd");
  }
  if (!smsCode) {
    throw Error("注册by手机号 请求缺失参数 smsCode");
  }
  if (!config.headers || !config.headers.deviceId) {
    throw Error("注册by手机号 缺失头请求参数 deviceId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("注册by手机号 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/registerByPhone",
        qs.stringify({ pwd, smsCode }),
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_1d550 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_1d550 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_d1637 = ({ uid }, config = {}) => {
  // 删除用户房屋   41fbe61d-8ec6-4ae3-9bf2-ca5eb4dd1637
  if (!uid) {
    throw Error("删除用户房屋 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("删除用户房屋 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/deleteUserHouse",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_d1637 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_d1637 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_d8a6c = ({ xqId, houseId }, config = {}) => {
  // 消息列表   446fcccb-07b5-42dc-a5ef-9568a1dd8a6c
  if (!xqId) {
    throw Error("消息列表 请求缺失参数 xqId");
  }
  if (!houseId) {
    throw Error("消息列表 请求缺失参数 houseId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("消息列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/notification/num",
        { params: { xqId, houseId } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_d8a6c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_d8a6c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_7de4b = ({ keyWord }, config = {}) => {
  // 搜索小区信息   4cc3e247-6204-48bf-9c95-00ab01d7de4b
  if (!keyWord) {
    throw Error("搜索小区信息 请求缺失参数 keyWord");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("搜索小区信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/baseorg/seachCityInfo",
        { params: { keyWord } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_7de4b 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7de4b 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_099cd = ({ keyWord }, config = {}) => {
  // 搜索城市   56953c18-2d89-47f5-b480-6f9d304099cd
  if (!keyWord) {
    throw Error("搜索城市 请求缺失参数 keyWord");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("搜索城市 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/baseorg/seachCity",
        { params: { keyWord } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_099cd 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_099cd 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_07d8c = ({ phone, smsCode, pwd }, config = {}) => {
  // 重置密码   5c44e847-1552-4efe-8177-0cc651c07d8c
  if (!phone) {
    throw Error("重置密码 请求缺失参数 phone");
  }
  if (!smsCode) {
    throw Error("重置密码 请求缺失参数 smsCode");
  }
  if (!pwd) {
    throw Error("重置密码 请求缺失参数 pwd");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("重置密码 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/resetUserPassWord",
        qs.stringify({ phone, smsCode, pwd }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_07d8c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_07d8c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_d16c6 = (config = {}) => {
  // 保修未读消息   5d81e6f6-ec76-4119-b0a0-63c579cd16c6

  if (!config.headers || !config.headers.imei) {
    throw Error("保修未读消息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/repair/getUnreadNum",
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_d16c6 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_d16c6 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_593e8 = ({ phone }, config = {}) => {
  // 验证设备   6075c52f-3371-4cf2-948d-c741e98593e8
  if (!phone) {
    throw Error("验证设备 请求缺失参数 phone");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("验证设备 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/appUser/verifyPhoneSendSms",
        { params: { phone } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_593e8 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_593e8 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_703f7 = (
  { current, statusTag, startTime, endTime, houseName },
  config = {}
) => {
  // 房屋列表   6473fbfd-cc71-4cef-b17e-053e3f8703f7
  if (!current) {
    throw Error("房屋列表 请求缺失参数 current");
  }
  if (!statusTag) {
    throw Error("房屋列表 请求缺失参数 statusTag");
  }
  if (!startTime) {
    throw Error("房屋列表 请求缺失参数 startTime");
  }
  if (!endTime) {
    throw Error("房屋列表 请求缺失参数 endTime");
  }
  if (!houseName) {
    throw Error("房屋列表 请求缺失参数 houseName");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("房屋列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/house/acceptance/page",
        { params: { current, statusTag, startTime, endTime, houseName } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_703f7 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_703f7 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_c2326 = (config = {}) => {
  // 邻里列表保存   6736cd46-d78a-4520-b690-9e3185cc2326

  if (!config.headers || !config.headers.imei) {
    throw Error("邻里列表保存 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/save",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_c2326 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_c2326 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_31fe1 = (
  { wyOrgID, xqOrgID, houseID, userName, ownerType, isInstalled },
  config = {}
) => {
  // 保存房屋信息   6ceb08f5-d5a2-4a91-82a7-d68eda831fe1
  if (!wyOrgID) {
    throw Error("保存房屋信息 请求缺失参数 wyOrgID");
  }
  if (!xqOrgID) {
    throw Error("保存房屋信息 请求缺失参数 xqOrgID");
  }
  if (!houseID) {
    throw Error("保存房屋信息 请求缺失参数 houseID");
  }
  if (!userName) {
    throw Error("保存房屋信息 请求缺失参数 userName");
  }
  if (!ownerType) {
    throw Error("保存房屋信息 请求缺失参数 ownerType");
  }
  if (!isInstalled) {
    throw Error("保存房屋信息 请求缺失参数 isInstalled");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("保存房屋信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/saveHouse",
        qs.stringify({
          wyOrgID,
          xqOrgID,
          houseID,
          userName,
          ownerType,
          isInstalled
        }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_31fe1 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_31fe1 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_46a5c = ({ checkCode, isInstalled }, config = {}) => {
  // 验证房屋   6de3367a-9db6-46b1-b3f7-eb2604246a5c
  if (!checkCode) {
    throw Error("验证房屋 请求缺失参数 checkCode");
  }
  if (!isInstalled) {
    throw Error("验证房屋 请求缺失参数 isInstalled");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("验证房屋 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/checkHouse",
        qs.stringify({ checkCode, isInstalled }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_46a5c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_46a5c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_0d4a0 = ({ id }, config = {}) => {
  // 房屋详情   6de5e86a-ea61-4c64-a812-963b2a40d4a0
  if (!id) {
    throw Error("房屋详情 请求缺失参数 id");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("房屋详情 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/house/acceptance/detail/1",
        { params: { id } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_0d4a0 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_0d4a0 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_76e67 = (config = {}) => {
  // 得到省份列表   78f39a22-ddc5-46e3-9185-e63788e76e67

  if (!config.headers || !config.headers.imei) {
    throw Error("得到省份列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/baseorg/provinceList",
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_76e67 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_76e67 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_c0f4e = ({ cityId }, config = {}) => {
  // 得到小区列表   7f793453-38af-4bf8-807f-519f6edc0f4e
  if (!cityId) {
    throw Error("得到小区列表 请求缺失参数 cityId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("得到小区列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/v1/baseorg/xqlist",
        { params: { cityId } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_c0f4e 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_c0f4e 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_8ee03 = (config = {}) => {
  // 得到支付方式列表   847a2996-98cc-41b6-b356-adfdd0b8ee03

  if (!config.headers || !config.headers.imei) {
    throw Error("得到支付方式列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/payChannel/getMchChannelList",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_8ee03 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_8ee03 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_12353 = (
  { houseId, month, device, returnUrl },
  config = {}
) => {
  // 创建订单   85ccfbf8-307c-4d6e-9401-a8a8eaf12353
  if (!houseId) {
    throw Error("创建订单 请求缺失参数 houseId");
  }
  if (!month) {
    throw Error("创建订单 请求缺失参数 month");
  }
  if (!device) {
    throw Error("创建订单 请求缺失参数 device");
  }
  if (!returnUrl) {
    throw Error("创建订单 请求缺失参数 returnUrl");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("创建订单 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/createOrder",
        qs.stringify({ houseId, month, device, returnUrl }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_12353 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_12353 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_f8d64 = (config = {}) => {
  // 退出登录   8ab03644-f1fe-41f0-b6f4-4d19203f8d64

  if (!config.headers || !config.headers.imei) {
    throw Error("退出登录 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/logout",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_f8d64 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_f8d64 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_1bb82 = ({ uid }, config = {}) => {
  // 删除用户房屋 Copy   9309a460-938d-421f-8f9d-95e64641bb82
  if (!uid) {
    throw Error("删除用户房屋 Copy 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("删除用户房屋 Copy 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/deleteUserHouse",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_1bb82 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_1bb82 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_53cc7 = (
  {
    uid,
    phone,
    nickname,
    realName,
    avatar,
    sex,
    age,
    birthday,
    email,
    imei,
    remark,
    loginTime,
    address,
    xqId,
    xqName,
    wyId,
    areaId
  },
  config = {}
) => {
  // 更新用户信息   93758de4-f5a2-4c75-b140-30b810153cc7
  if (!uid) {
    throw Error("更新用户信息 请求缺失参数 uid");
  }
  if (!phone) {
    throw Error("更新用户信息 请求缺失参数 phone");
  }
  if (!nickname) {
    throw Error("更新用户信息 请求缺失参数 nickname");
  }
  if (!realName) {
    throw Error("更新用户信息 请求缺失参数 realName");
  }
  if (!avatar) {
    throw Error("更新用户信息 请求缺失参数 avatar");
  }
  if (!sex) {
    throw Error("更新用户信息 请求缺失参数 sex");
  }
  if (!age) {
    throw Error("更新用户信息 请求缺失参数 age");
  }
  if (!birthday) {
    throw Error("更新用户信息 请求缺失参数 birthday");
  }
  if (!email) {
    throw Error("更新用户信息 请求缺失参数 email");
  }
  if (!imei) {
    throw Error("更新用户信息 请求缺失参数 imei");
  }
  if (!remark) {
    throw Error("更新用户信息 请求缺失参数 remark");
  }
  if (!loginTime) {
    throw Error("更新用户信息 请求缺失参数 loginTime");
  }
  if (!address) {
    throw Error("更新用户信息 请求缺失参数 address");
  }
  if (!xqId) {
    throw Error("更新用户信息 请求缺失参数 xqId");
  }
  if (!xqName) {
    throw Error("更新用户信息 请求缺失参数 xqName");
  }
  if (!wyId) {
    throw Error("更新用户信息 请求缺失参数 wyId");
  }
  if (!areaId) {
    throw Error("更新用户信息 请求缺失参数 areaId");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("更新用户信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/updateUserInfo",
        qs.stringify({
          uid,
          phone,
          nickname,
          realName,
          avatar,
          sex,
          age,
          birthday,
          email,
          imei,
          remark,
          loginTime,
          address,
          xqId,
          xqName,
          wyId,
          areaId
        }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_53cc7 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_53cc7 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_c0885 = (config = {}) => {
  // 得到城市列表   9b49a535-fecd-43a2-aecf-267c4adc0885

  if (!config.headers || !config.headers.imei) {
    throw Error("得到城市列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/baseorg/cityList",
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_c0885 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_c0885 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_d61cc = (config = {}) => {
  // 我的房屋信息   9bc8404b-93ba-49fb-89f7-e48ad4cd61cc

  if (!config.headers || !config.headers.imei) {
    throw Error("我的房屋信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/getMyHouse",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_d61cc 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_d61cc 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_cc4ae = ({ uid, isCheckIn }, config = {}) => {
  // 验证成员   9edb3369-4294-4cf8-a934-bf4666bcc4ae
  if (!uid) {
    throw Error("验证成员 请求缺失参数 uid");
  }
  if (!isCheckIn) {
    throw Error("验证成员 请求缺失参数 isCheckIn");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("验证成员 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/checkUser",
        qs.stringify({ uid, isCheckIn }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_cc4ae 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_cc4ae 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_ebe84 = (config = {}) => {
  // 得到版本号   a504db90-ae8f-471d-b083-780e7d5ebe84

  if (!config.headers || !config.headers.imei) {
    throw Error("得到版本号 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/version/getVersion/androidcommunity",
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_ebe84 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_ebe84 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_66db2 = (config = {}) => {
  // 反馈未读消息   a779e9ab-3b8b-4fda-866a-1ccd67166db2

  if (!config.headers || !config.headers.imei) {
    throw Error("反馈未读消息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/feedback/getUnreadNum",
        {},
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_66db2 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_66db2 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_fb0f4 = (config = {}) => {
  // 房屋列表 Copy Copy Copy   a8723a45-11eb-4df2-8159-5a8bc37fb0f4

  if (!config.headers || !config.headers.imei) {
    throw Error("房屋列表 Copy Copy Copy 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/acceptance/acceptance",
        null,
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_fb0f4 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_fb0f4 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_fdc0d = ({ phone }, config = {}) => {
  // 更新密码收到的验证码   b923a7aa-2c2b-42c2-bca3-cba96f9fdc0d
  if (!phone) {
    throw Error("更新密码收到的验证码 请求缺失参数 phone");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("更新密码收到的验证码 缺失头请求参数 imei");
  }
  if (!config.headers || !config.headers.deviceId) {
    throw Error("更新密码收到的验证码 缺失头请求参数 deviceId");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/updateNewPwdSendSms",
        qs.stringify({ phone }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_fdc0d 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_fdc0d 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_c172a = ({ areaID }, config = {}) => {
  // 得到房屋的列表   c69932f1-cbac-4219-a610-782d3a6c172a
  if (!areaID) {
    throw Error("得到房屋的列表 请求缺失参数 areaID");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("得到房屋的列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/baseorg/houselist",
        { params: { areaID } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_c172a 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_c172a 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_c8a84 = ({ houseId, isComplete, current }, config = {}) => {
  // 账单   cbb8661b-650a-4d00-9c52-afca96bc8a84
  if (!houseId) {
    throw Error("账单 请求缺失参数 houseId");
  }
  if (!isComplete) {
    throw Error("账单 请求缺失参数 isComplete");
  }
  if (!current) {
    throw Error("账单 请求缺失参数 current");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("账单 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/list",
        qs.stringify({ houseId, isComplete, current }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_c8a84 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_c8a84 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_f3929 = ({ password, grant_type, username }, config = {}) => {
  // 登录   ce0ea191-6ca0-4644-99bb-75133c1f3929
  if (!password) {
    throw Error("登录 请求缺失参数 password");
  }
  if (!grant_type) {
    throw Error("登录 请求缺失参数 grant_type");
  }
  if (!username) {
    throw Error("登录 请求缺失参数 username");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("登录 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/authentication/login",
        qs.stringify({ password, grant_type, username }),
        Object.assign(
          {
            headers: {
              Authorization:
                "Basic YW5kcm9pZDokMmEkMTAkdUMuVGRFMW5qT09xcWtveXI3M1QzT2tKcGNiQVJiczFJMUtkMGU0c3FOSUNKMGsyVFhlaVc=",
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_f3929 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_f3929 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_19ba4 = ({ mobile }, config = {}) => {
  // 短信   d5c476f3-29d0-4f80-8448-9af795b19ba4
  if (!mobile) {
    throw Error("短信 请求缺失参数 mobile");
  }
  if (!config.headers || !config.headers.deviceId) {
    throw Error("短信 缺失头请求参数 deviceId");
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
      .then(res => {
        console.log(
          "%c Success: HTTP_19ba4 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_19ba4 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_ef837 = ({ houseId, month }, config = {}) => {
  // 账单详情   e137c5db-7da4-44f0-a2b2-313e79bef837
  if (!houseId) {
    throw Error("账单详情 请求缺失参数 houseId");
  }
  if (!month) {
    throw Error("账单详情 请求缺失参数 month");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("账单详情 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/cost/bill/detail",
        qs.stringify({ houseId, month }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_ef837 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_ef837 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_b7bce = ({ phone }, config = {}) => {
  // 重置密码收到的验证码   ec8dbf97-f5e3-4c6f-8d29-680eee6b7bce
  if (!phone) {
    throw Error("重置密码收到的验证码 请求缺失参数 phone");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("重置密码收到的验证码 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/appUser/resetUserPwdSendSms",
        { params: { phone } },
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_b7bce 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_b7bce 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_2774f = (config = {}) => {
  // 文件上传   ecce267c-dd2a-4da7-aca9-4924e562774f

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/file/upload",
        null,
        Object.assign(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_2774f 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_2774f 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_dae5e = ({ smsCode, pwd }, config = {}) => {
  // 更新密码   ed3eec25-39f9-4d12-9bab-5825ed3dae5e
  if (!smsCode) {
    throw Error("更新密码 请求缺失参数 smsCode");
  }
  if (!pwd) {
    throw Error("更新密码 请求缺失参数 pwd");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("更新密码 缺失头请求参数 imei");
  }
  if (!config.headers || !config.headers.deviceId) {
    throw Error("更新密码 缺失头请求参数 deviceId");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/appUser/updateNewPwd",
        qs.stringify({ smsCode, pwd }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_dae5e 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_dae5e 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_3fa3a = (
  { houseID, userName, userAccount, ownerType, resetCode },
  config = {}
) => {
  // 添加房屋成员   edfb6fa5-9444-4e54-b3a1-320de293fa3a
  if (!houseID) {
    throw Error("添加房屋成员 请求缺失参数 houseID");
  }
  if (!userName) {
    throw Error("添加房屋成员 请求缺失参数 userName");
  }
  if (!userAccount) {
    throw Error("添加房屋成员 请求缺失参数 userAccount");
  }
  if (!ownerType) {
    throw Error("添加房屋成员 请求缺失参数 ownerType");
  }
  if (!resetCode) {
    throw Error("添加房屋成员 请求缺失参数 resetCode");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("添加房屋成员 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/addUser",
        qs.stringify({ houseID, userName, userAccount, ownerType, resetCode }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_3fa3a 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_3fa3a 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};

export const HTTP_25f5d = ({ uid }, config = {}) => {
  // 邻里列表删除   f7c454a9-21cd-4be4-b91d-f63087625f5d
  if (!uid) {
    throw Error("邻里列表删除 请求缺失参数 uid");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("邻里列表删除 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/delete",
        qs.stringify({ uid }),
        Object.assign(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "bearer 43f456c7-f480-4fea-bf86-d2e80d418e15"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_25f5d 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve(res);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_25f5d 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        reject(err);
      });
  });
};
