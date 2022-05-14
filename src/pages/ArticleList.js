import articles from "../dummydata/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/posttable";
import tablecolumns from "../components/tablecolumns.js";

 
const ArticleList = () => {
  return (
    <div>
      <h2>테이블 생성!!!</h2>
             <Styles>
               <Table
                data={articles}
                columns={tablecolumns}
               />
            </Styles>
    </div>
  );
}

 
export default ArticleList;
