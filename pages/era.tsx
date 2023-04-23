import { NextPage } from 'next';
import { Era,Timeline } from '../public/era';


const Era = () => {


  const era1: Era[] = [
    {
        eraname: '東亞近代史',
        describe: '',
        thing: [
            { date: new Date('1966'), thing: '文化大革命',other:["組織紅衛兵(學生)","口號:破四舊，立四新；","革命無罪造反有理","也稱為(十年浩劫)"]},
            { date: new Date('1967'), thing: '東南亞國協成立' ,other:["(曼谷)"]},
            { date: new Date('1969'), thing: '中蘇關西降至冰點' ,other:["(邊境問題)"]},
            { date: new Date('1972'), thing: '中美 關西正常化' ,other:["尼克森訪問北京森"]},
            { date: new Date('1973'), thing: '美國從越南撤軍'},
            { date: new Date('1975'), thing: '越南統一' ,other:["北越(共產)統一越南","越戰結束"]},
            { date: new Date('1976'), thing: '毛澤東',other:["四人幫失勢","(王洪文、張春橋、江青、姚文元)"]},
            { date: new Date('1977'), thing: '東約解散',other:["因東南亞大多為第三世界國家","成效有限"]},
            { date: new Date('1978'), thing: '中國改革開放',other:["鄧小平推動","口號:對內改革，對外開放","(廢人民公社、設經濟特區","整頓國營企業)","(開放經濟，政治保守)"] },
            { date: new Date('1980'), thing: '成立經濟特區',other:["深圳、珠海、汕頭、廈門、海南"]},
            { date: new Date('1989'), thing: '六四天安門事件',other:["學生為弔念胡耀邦逝世並追求政治改革","集結於 北京-天安門 廣場前","中共後以武力鎮壓","國際施予經濟制裁"]},
            { date: new Date('1989'), thing: '中蘇關西正常化',other:["戈巴契夫訪中"]},
            { date: new Date('1990'), thing: '蘇聯解體',other:["(戈巴契夫請辭)","鄧小平感受到壓力(P=F/A)"]},
            { date: new Date('1990'), thing: '南巡講話',other:["鼓勵經濟"]},
            { date: new Date('1994'), thing: '李登輝推出新南向政策' },
            { date: new Date('1997'), thing: '歸還香港' ,other:["英國"]},
            { date: new Date('1999'), thing: '歸還澳門' ,other:["葡萄牙"]},
        ],
    }
  ];
  return (
    <>
      <Timeline eradata={era1} />
    </>
  );
}

export default Era;

export async function getStaticProps() {
  //const req = await fetch('');
  //const data = await req.json();
  return {
    props: {
      //data,
    },
  };
}