// 招呼API 项目 API代码
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

export const HTTP_77378 = ({ uid }, config = {}) => {
  // 问卷调查结果   1865e8b6-5386-4ac4-8d94-8c8f37f77378
  if (!uid) {
    throw Error("问卷调查结果 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/paper/app/questionResult/1185036843662491650",
        Object.assign(
          { params: { uid } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_77378 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_77378 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_ba754 = (config = {}) => {
  // 调查问卷列表   27cf4667-3ae9-4bb8-92f0-728eb8cba754

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/paper/app/paperListShow",
        null,
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              platform: "web",
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_ba754 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_ba754 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_613fc = ({ uid }, config = {}) => {
  // 问卷调查详情   56c0d9b1-a9ef-41e2-8235-4ca548f613fc
  if (!uid) {
    throw Error("问卷调查详情 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/paper/app/question/1185036843662491650",
        Object.assign(
          { params: { uid } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_613fc 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_613fc 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_8bf7a = ({ uid }, config = {}) => {
  // 小区公告详情   5f205f54-64dd-44d5-871a-b9fc26b8bf7a
  if (!uid) {
    throw Error("小区公告详情 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/noticeDetail",
        qs.stringify({ uid }),
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              platform: "web",
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_8bf7a 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_8bf7a 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_03ffa = (
  { acceptanceId, status, content, images },
  config = {}
) => {
  // 房屋验收报修 验收   6a8f4c8b-c2c9-4ed1-9685-ed6f6bb03ffa

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/house/acceptance/acceptance",
        { acceptanceId, status, content, images },
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json",
              platform: "web",
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_03ffa 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_03ffa 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_e9b12 = (
  {
    startTime,
    endTime,
    statusTag,
    contactPhone,
    userName,
    houseName,
    houseId,
    orderNo,
    orgganId
  },
  config = {}
) => {
  // 房屋验收报修单列表   6db5d551-2290-4d6b-b238-1ff6666e9b12

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/house/acceptance/page",
        Object.assign(
          {
            params: {
              startTime,
              endTime,
              statusTag,
              contactPhone,
              userName,
              houseName,
              houseId,
              orderNo,
              orgganId
            }
          },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_e9b12 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_e9b12 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_42084 = ({ uid }, config = {}) => {
  // 查看某用户分数问卷结果   713feab4-a706-454e-9261-4ae9a8e42084
  if (!uid) {
    throw Error("查看某用户分数问卷结果 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/paper/app/questionScoreResult/1185036843662491650",
        Object.assign(
          { params: { uid } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_42084 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_42084 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_f699e = (config = {}) => {
  // 小区公告列表   8d80e494-c35b-47d8-aed7-442c3e2f699e

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/xq/noticeList",
        null,
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              platform: "web",
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_f699e 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_f699e 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_afe5c = (
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
  // 第三方openId注册   8df59004-c4b8-4185-a57e-2da54b9afe5c

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
          "%c Success: HTTP_afe5c 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_afe5c 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_e8edf = ({ uid }, config = {}) => {
  // 用户是否已提交答案   917effcf-23dd-4659-8903-521fa90e8edf

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/paper/app/isAnswer/1185036843662491650",
        Object.assign(
          { params: { uid } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_e8edf 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_e8edf 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_8eb6f = ({ uid }, config = {}) => {
  // 用户是否能查看问卷结果   bf2a7852-9037-4961-884b-3ff88228eb6f
  if (!uid) {
    throw Error("用户是否能查看问卷结果 请求缺失参数 uid");
  }

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/paper/app/questionIsShow/1185036843662491650",
        Object.assign(
          { params: { uid } },
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_8eb6f 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_8eb6f 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_05fd3 = ({ openId, providerId }, config = {}) => {
  // 第三方openId登录   d71d80f2-e0c9-43f9-9705-b81023705fd3
  if (!openId) {
    throw Error("第三方openId登录 请求缺失参数 openId");
  }
  if (!providerId) {
    throw Error("第三方openId登录 请求缺失参数 providerId");
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
              platform: "web",
              "Content-Type": "application/x-www-form-urlencoded"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_05fd3 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_05fd3 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_f39ac = (array, config = {}) => {
  // 提交问卷答案   d9018134-3f1b-4baf-b734-0983c91f39ac

  return new Promise((resolve, reject) => {
    $axios
      .post(
        "/v1/paper/app/commitAnswer",
        array,
        deepObjectMerge(
          {
            headers: {
              "Content-Type": "application/json",
              platform: "web",
              Authorization:
                "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
            }
          },
          config
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_f39ac 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_f39ac 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7fdaa = ({ mobile }, config = {}) => {
  // 发送验证码   e490f7c7-4fdf-4895-8901-747712f7fdaa
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
          "%c Success: HTTP_7fdaa 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7fdaa 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};

export const HTTP_7d007 = (config = {}) => {
  // 房屋验收报修 查看详情   f85ba504-f2de-4ab0-af7b-1a8a5077d007

  return new Promise((resolve, reject) => {
    $axios
      .get(
        "/v1/house/acceptance/detail/986388c4c29043959631433b92a17c2d",
        Object.assign(
          {},
          deepObjectMerge(
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                platform: "web",
                Authorization:
                  "Basic aW9zOjliYWRkNGYwOTAwZTQxMDdhY2JhZjczZWQ3ZTc1ZGJj"
              }
            },
            config
          )
        )
      )
      .then(res => {
        console.log(
          "%c Success: HTTP_7d007 请求成功 %c \n",
          "background-color: #82ae46; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          "",
          res
        );
        resolve([res, null]);
      })
      .catch(err => {
        console.log(
          "%c Error: HTTP_7d007 请求报错 %c",
          "background-color: #a22041; color: #fff;padding:3px;box-sizing: border-box;border-radius: 3px;",
          ""
        );
        console.log(new Error());
        reject([null, err]);
      });
  });
};
