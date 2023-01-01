import styled from "styled-components";

type ImageProps = {
  src: string;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 1em;
    height: 50%;
  }
`;

export const Table = styled.table`
  width: 600px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  display: table;
  float: left;
  width: 100%;
  height: 5vh;
  margin-top: 40px;
  background-color: #ccd9d3;
  border-bottom: 1px solid #336851;
`;

export const Tbody = styled.tbody`
  overflow-y: scroll;
  background-color: #e6ece9;
  float: left;
  width: 600px;
  height: 100vh;
`;

export const Th1 = styled.th`
  width: 100px;
  font-size: 16px;
  text-align: center;
  padding: 20px;
`;

export const ThName = styled.th`
  width: 200px;
  font-size: 16px;
  text-align: center;
  padding: 20px;
`;

export const Th2 = styled.th`
  width: 150px;
  font-size: 16px;
  text-align: center;
  padding: 20px;
`;

export const Trow = styled.tr`
  display: table-cell;
  vertical-align: middle;
  height: 60px;
  border-bottom: 1px solod grey;
`;

export const ResultTrow = styled.tr`
  display: table;
  width: 600px;
  padding: 10px 10px;
  border-bottom: 1px solid grey;
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
  padding: 1em 1em;
  @media screen and (max-width: 500px) {
    width: 27em;
    padding: 1em 1em;
  }
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
  width: 150px;
  text-align: center;
`;
