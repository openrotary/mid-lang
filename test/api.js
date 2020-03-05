// 招呼社区APP 项目 API代码
import qs from "qs";

function deepObjectMerge(FirstOBJ, SecondOBJ) {
  // 深度合并对象
  for (var key in SecondOBJ) {
    FirstOBJ[key] =
      FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]"
        ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
        : (FirstOBJ[key] = SecondOBJ[key]);
  }
  return FirstOBJ;
}

import $axios from "../http";

export const HTTP_e8354 = (
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
        deepObjectMerge(
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
          "%c Success: HTTP_e8354 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_e8354 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_d4370 = ({ uid }, config = {}) => {
  // 物业详情   0b059658-bb7e-4694-8a9f-8584709d4370
  if (!uid) {
    throw Error("物业详情 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/wy/detail",
        qs.stringify({ uid }),
        deepObjectMerge(
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
          "%c Success: HTTP_d4370 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_d4370 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_14edf = ({ messageId }, config = {}) => {
  // 邻里-收藏-取消收藏   0c4d8721-1ad3-40d8-85be-2c0113d14edf
  if (!messageId) {
    throw Error("邻里-收藏-取消收藏 请求缺失参数 messageId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/collect/delete",
        qs.stringify({ messageId }),
        deepObjectMerge(
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
          "%c Success: HTTP_14edf 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_14edf 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7c508 = ({ current, size }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_7c508 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7c508 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_2ef25 = ({ current, size }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_2ef25 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_2ef25 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_0eb1c = ({ uid }, config = {}) => {
  // 邻里-消息-消息详情   2a13bebe-2510-40ef-8135-e8360cc0eb1c
  if (!uid) {
    throw Error("邻里-消息-消息详情 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/near/message/get",
        Object.assign(
          { params: { uid } },
          deepObjectMerge(
            {
              headers: {}
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_0eb1c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_0eb1c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_6fcf8 = ({ status, pageNO, pageSize }, config = {}) => {
  // 反馈列表未读消息数   2a9c40b6-e14f-40cd-8200-a9dbb526fcf8

  if (!config.headers || !config.headers.imei) {
    throw Error("反馈列表未读消息数 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/feedback/getUnreadNum",
        Object.assign(
          { params: { status, pageNO, pageSize } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_6fcf8 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_6fcf8 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7def2 = ({ houseId, month }, config = {}) => {
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
        deepObjectMerge(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_7def2 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7def2 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_e565c = (
  {
    houseId,
    invoiceType,
    invoiceName,
    invoiceTaxNumber,
    invoiceAddress,
    invoiceTel,
    invoiceBankName,
    invoiceBankNumber
  },
  config = {}
) => {
  // 添加发票信息   3a46a395-4956-483b-a09b-0a240fae565c

  if (!config.headers || !config.headers.imei) {
    throw Error("添加发票信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/invoice/add",
        {
          houseId,
          invoiceType,
          invoiceName,
          invoiceTaxNumber,
          invoiceAddress,
          invoiceTel,
          invoiceBankName,
          invoiceBankNumber
        },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_e565c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_e565c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_bca0c = ({ content, messageId }, config = {}) => {
  // 邻里-消息-发布评论   3b2c8b29-961b-4e4d-8c4d-2e43e2dbca0c

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/comment/save",
        { content, messageId },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_bca0c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_bca0c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_97f84 = (config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_97f84 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_97f84 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_506fc = ({ houseId, isComplete, current }, config = {}) => {
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
        deepObjectMerge(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_506fc 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_506fc 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_98dd2 = (
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
        deepObjectMerge(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_98dd2 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_98dd2 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_3486b = ({ xqId, houseId }, config = {}) => {
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
        Object.assign(
          { params: { xqId, houseId } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_3486b 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_3486b 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_eff33 = ({ status, pageNO, pageSize }, config = {}) => {
  // 我的房屋信息   4934c523-96c7-41b0-9d21-09bb94eeff33

  if (!config.headers || !config.headers.imei) {
    throw Error("我的房屋信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/houseUser/getMyHouse",
        qs.stringify({ status, pageNO, pageSize }),
        deepObjectMerge(
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
          "%c Success: HTTP_eff33 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_eff33 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7690e = (uid, config = {}) => {
  // 删除发票接口   51f184f4-0236-45c5-b543-46ae64d7690e

  if (!config.headers || !config.headers.imei) {
    throw Error("删除发票接口 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        `/v1/house/invoice/delete/${uid}`,
        null,
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_7690e 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7690e 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_6c5ac = ({ xqId }, config = {}) => {
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
        Object.assign(
          { params: { xqId } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_6c5ac 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_6c5ac 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_0cd3c = (
  {
    uid,
    houseId,
    invoiceType,
    invoiceName,
    invoiceTaxNumber,
    invoiceAddress,
    invoiceTel,
    invoiceBankName,
    invoiceBankNumber
  },
  config = {}
) => {
  // 编辑发票信息   56567e3a-f912-4144-817a-cb9d7880cd3c

  if (!config.headers || !config.headers.imei) {
    throw Error("编辑发票信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/invoice/edit",
        {
          uid,
          houseId,
          invoiceType,
          invoiceName,
          invoiceTaxNumber,
          invoiceAddress,
          invoiceTel,
          invoiceBankName,
          invoiceBankNumber
        },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_0cd3c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_0cd3c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_054d3 = ({ current, size }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_054d3 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_054d3 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_77d53 = (config = {}) => {
  // 报修列表未读消息数   5df16cc1-d8c9-4345-94b1-afde7fc77d53

  if (!config.headers || !config.headers.imei) {
    throw Error("报修列表未读消息数 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/repair/getUnreadNum",
        Object.assign(
          {},
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_77d53 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_77d53 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_20509 = ({ mobile }, config = {}) => {
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
        Object.assign(
          { params: { mobile } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_20509 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_20509 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_07c80 = (config = {}) => {
  // 小区公告列表   73a47e7f-df09-4a5a-9c44-74ecfc207c80

  if (!config.headers || !config.headers.imei) {
    throw Error("小区公告列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/noticeList",
        null,
        deepObjectMerge(
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
          "%c Success: HTTP_07c80 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_07c80 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_c18a3 = ({ current, size, userId }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_c18a3 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_c18a3 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7e8d8 = (
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
        deepObjectMerge(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_7e8d8 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7e8d8 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_00bbf = ({ uid }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_00bbf 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_00bbf 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_84190 = ({ current, size, xqId, typeKey }, config = {}) => {
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

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/near/message/list",
        Object.assign(
          { params: { current, size, xqId, typeKey } },
          deepObjectMerge(
            {
              headers: {}
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_84190 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_84190 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_1d69c = ({ mainId, type }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_1d69c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_1d69c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_1d765 = ({ houseId, current }, config = {}) => {
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
        deepObjectMerge(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_1d765 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_1d765 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_b7f35 = ({ startTime, endTime }, config = {}) => {
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
        Object.assign(
          { params: { startTime, endTime } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_b7f35 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_b7f35 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_3b55b = ({ content, type }, config = {}) => {
  // 业主端-反馈-提交反馈   84ed1ea5-c6f0-4096-a415-4c151803b55b

  if (!config.headers || !config.headers.imei) {
    throw Error("业主端-反馈-提交反馈 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/save",
        { content, type },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_3b55b 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_3b55b 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_76475 = ({ acceptanceId, status, content }, config = {}) => {
  // 房屋验收报修 验收   8ccb544d-67c2-498d-a032-d9357fb76475

  if (!config.headers || !config.headers.imei) {
    throw Error("房屋验收报修 验收 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/acceptance/acceptance",
        { acceptanceId, status, content },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_76475 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_76475 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_2b683 = ({ grant_type, refresh_token }, config = {}) => {
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
        deepObjectMerge(
          {
            headers: {
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_2b683 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_2b683 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_b2d3a = ({ current }, config = {}) => {
  // 邻里-消息-我的消息列表   91578b11-c780-488e-9671-8102a32b2d3a
  if (!current) {
    throw Error("邻里-消息-我的消息列表 请求缺失参数 current");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/messageList",
        { current },
        deepObjectMerge(
          {
            headers: {}
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_b2d3a 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_b2d3a 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_6f4ce = (
  {
    providerId,
    providerUserId,
    displayName,
    profileUrl,
    imageUrl,
    accessToken,
    secret,
    refreshToken
  },
  config = {}
) => {
  // 第三方openId注册   9b403fd7-205a-4e71-a674-87c06386f4ce

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
        {
          providerId,
          providerUserId,
          displayName,
          profileUrl,
          imageUrl,
          accessToken,
          secret,
          refreshToken
        },
        deepObjectMerge(
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
      .then(res => {
        console.log(
          "%c Success: HTTP_6f4ce 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_6f4ce 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_15e4e = ({ id }, config = {}) => {
  // 业主端-反馈-详情   b16fab62-f135-4b83-997a-b6b59c515e4e
  if (!id) {
    throw Error("业主端-反馈-详情 请求缺失参数 id");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/detail",
        qs.stringify({ id }),
        deepObjectMerge(
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
          "%c Success: HTTP_15e4e 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_15e4e 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_bcadf = ({ feedbackId, content }, config = {}) => {
  // 业主端-反馈-回复   b54e6bba-c621-4412-97eb-68ef896bcadf

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/reply",
        { feedbackId, content },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_bcadf 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_bcadf 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_883d5 = ({ status, pageNO, pageSize }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_883d5 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_883d5 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7c3f1 = (
  { nearMessageExtra, remark, typeKey },
  config = {}
) => {
  // 邻里-消息-发布消息   bd4bff5e-f5f2-4738-a954-22768c97c3f1

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/message/save",
        { nearMessageExtra, remark, typeKey },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_7c3f1 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7c3f1 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_db5ae = ({ openId, providerId }, config = {}) => {
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
        deepObjectMerge(
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
      .then(res => {
        console.log(
          "%c Success: HTTP_db5ae 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_db5ae 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_875d4 = ({ mainId, type }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_875d4 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_875d4 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_fed43 = ({ username, password, grant_type }, config = {}) => {
  // 登录   e7929de4-5c5f-4758-ac84-7ad9e7afed43
  if (!username) {
    throw Error("登录 请求缺失参数 username");
  }
  if (!password) {
    throw Error("登录 请求缺失参数 password");
  }
  if (!config.headers || !config.headers.imei) {
    throw Error("登录 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/authentication/login",
        qs.stringify({ username, password, grant_type }),
        deepObjectMerge(
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
      .then(res => {
        console.log(
          "%c Success: HTTP_fed43 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_fed43 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_b4379 = ({ xqId, current, categoryId }, config = {}) => {
  // 常用查询   e917c86f-0857-4f01-a309-ba6f187b4379
  if (!xqId) {
    throw Error("常用查询 请求缺失参数 xqId");
  }
  if (!categoryId) {
    throw Error("常用查询 请求缺失参数 categoryId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/contact",
        qs.stringify({ xqId, current, categoryId }),
        deepObjectMerge(
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
          "%c Success: HTTP_b4379 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_b4379 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_079f5 = (config = {}) => {
  // 常用查询分类   e97817a6-2cd8-42dd-9993-0b78e34079f5

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/contactCategory",
        null,
        deepObjectMerge(
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
          "%c Success: HTTP_079f5 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_079f5 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_ec761 = ({ uid }, config = {}) => {
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
        deepObjectMerge(
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
          "%c Success: HTTP_ec761 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_ec761 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_2dbd3 = ({ messageId }, config = {}) => {
  // 邻里-收藏-收藏   ed205536-72a4-41ef-8116-e68df972dbd3
  if (!messageId) {
    throw Error("邻里-收藏-收藏 请求缺失参数 messageId");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/near/collect/save",
        qs.stringify({ messageId }),
        deepObjectMerge(
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
          "%c Success: HTTP_2dbd3 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_2dbd3 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_94833 = (config = {}) => {
  // 业主端-反馈-列表   ef608850-5f38-4070-afd3-a1ba4d994833

  if (!config.headers || !config.headers.imei) {
    throw Error("业主端-反馈-列表 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/feedback/list",
        null,
        deepObjectMerge(
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
          "%c Success: HTTP_94833 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_94833 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_35dcf = (uid, config = {}) => {
  // 查看发票信息   fe358ba9-f21a-4774-bf94-129f26135dcf

  if (!config.headers || !config.headers.imei) {
    throw Error("查看发票信息 缺失头请求参数 imei");
  }
  return new Promise((resolve, reject) => {
    $axios
      .get(
        `/v1/house/invoice/detail/${uid}`,
        Object.assign(
          {},
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_35dcf 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_35dcf 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};
