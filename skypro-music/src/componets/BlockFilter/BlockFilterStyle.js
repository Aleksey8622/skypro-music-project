import { styled } from "styled-components";

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const BtnActive = styled(FilterButton)`
  cursor: pointer;
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
`;
export const MenuFilter = styled.nav`
  position: absolute;
  top: calc(100% - -10px);
  left: 35px;
  width: 250px;
  padding: 25px;
  background-color: #272727;
  border: 1px solid #d9b6ff;
  border-radius: 10px;
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 25px;
    border: 10px solid transparent;
    top: -20px;
    border-bottom: 10px solid #d9b6ff;
  }
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 25px;
    border: 10px solid transparent;
    top: -19px;
    border-bottom: 10px solid #272727;
  }
`;
export const MenuList = styled.ul`
  overflow-y: scroll;
  height: 180px;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: black;
    border-radius: 10px;
    border: 1px solid #d9b6ff;
  }
  &::-webkit-scrollbar {
    width: 12px;
    background-color: black;
    border-radius: 10px;
    border: 1px solid #d9b6ff;
  }
  &::-webkit-scrollbar-thumb {
    width: 12px;
    background-color: black;
    border-radius: 10px;
    border: 1px solid #d9b6ff;
  }
`;
export const MenuFilterActive = styled(MenuFilter)`
  left: 10px;
`;
export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &:hover {
    color: #d9b6ff;
    text-decoration: underline;
  }
`;
