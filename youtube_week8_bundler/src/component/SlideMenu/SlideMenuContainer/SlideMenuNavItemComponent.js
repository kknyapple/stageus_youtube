import React from "react";
import styled from "styled-components";

import { ButtonTag } from "../../../style/tag";

const SlideMenuItem = styled.div`
  width: 200px;
  height: 40px;
  padding-left: 14px;
`;

const SlideMenuItemButton = styled(ButtonTag)`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  padding-left: 18px;
`;

const SlideMenuItemImg = styled.img`
  width: 28px;
  height: auto;
  padding-right: 20px;
`;

const SlideMenuItemText = styled.span`
  font-size: 14px;
`;

export default function SlideMenuNavItemComponent(props) {
  const { menu } = props;

  const onMouseOverHandler = (e) => {
    e.currentTarget.style.backgroundColor = "lightgray";
  };

  const onMouseOutHandler = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
  };
  // 컴포넌트 합치기
  // 컴포넌트 재활용, 리렌더링, 데이터베이스 접속으로 나눠주기
  return (
    <SlideMenuItem
      id={`header-menu${menu.id}`}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <SlideMenuItemButton>
        <SlideMenuItemImg src={`./images/${menu.img}.jpg`} />
        <SlideMenuItemText>{menu.name}</SlideMenuItemText>
      </SlideMenuItemButton>
    </SlideMenuItem>
  );
}
