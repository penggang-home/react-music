import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  color: #fff;
  background-color: #242424;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      .logo {
        display: inline-block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999999px;
      }
      .select-list {
        display: flex;
        line-height: 70px;
        .select-item {
          position: relative;
          a {
            display: block;
            padding: 0 20px;
            color: #ccc;
            text-decoration: none;
          }
          :last-of-type a {
            position: relative;
            ::after {
              content: '';
              position: absolute;
              width: 28px;
              height: 19px;
              /* 因为是在 styled-components 中 所以可以使用 $ */
              background-image: url(${require('@/assets/images/sprite_01.png')});
              background-position: -190px 0;
              top: 20px;
              right: -15px;
            }
          }

          &:hover a,
          a.active {
            color: #fff;
            background-color: #000;
          }
          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 12px;

      /* 搜索框 */
      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }

      /* 创作者中心 */
      .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
        &:hover {
          border: 1px solid #fff;
          cursor: pointer;
          color: #fff;
        }
      }

      /* 登录按钮 */
      .login {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
