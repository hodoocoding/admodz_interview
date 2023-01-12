import styled from "styled-components";

type ImageProps = {
  src: string;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 30px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  display: table;
  float: left;
  width: 100%;
  height: 5vh;
  margin-top: 20px;
  background-color: #f0f0f5;
  border-bottom: 1px solid #f3f5f9;
`;

export const Tbody = styled.tbody`
  overflow-y: scroll;
  background-color: #f3f5f9;
  float: left;
  width: 600px;
  height: 70vh;
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const Th1 = styled.th`
  width: 120px;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

export const ThName = styled.th`
  width: 140px;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

export const Th2 = styled.th`
  width: 110px;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`;

export const Trow = styled.tr`
  display: table-cell;
  vertical-align: middle;
  border-bottom: 1px solod #dae1e7;
`;

export const ResultTrow = styled.tr`
  display: table;
  padding: 10px 0px 10px 10px;
  border-bottom: 1px solid #dae1e7;
  word-break: break-all;
  height: auto;
  font-size: 1em;
  @media screen and (max-width: 500px) {
    font-size: 0.9em;
  }
`;

export const TableData = styled.td`
  display: flex;
  align-items: center;
  width: 200px;
  gap: 10px;
  padding: 8px 8px;
`;

export const Thumbnail = styled.img<ImageProps>`
  width: 80px;
  height: 100%;
`;

export const Name = styled.div`
  width: 180px;
  font-size: 14px;
  flex-direction: column;
  text-align: center;
`;

export const Td = styled.td`
  width: 96px;
  text-align: center;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Button = styled.button`
  margin: 0px 25px;
  padding: 5px;
  background: #9999dd;
  color: white;
  width: 40px;
  cursor: pointer;
  border-radius: 30px;
  border: none;

  :hover {
    background: mintcream;
    color: black;
  }
`;
