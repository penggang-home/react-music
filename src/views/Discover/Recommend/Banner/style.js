import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    background-color: transparent;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      height: 285px;
      width: 100%;
    }
  }
  
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/images/download.png')});
`

export const BannerControl = styled.div`
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/images/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
