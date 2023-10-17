import React from "react";
//import { useEmail } from "../context/EmailProvider";

const EmailBody = ({htmlDecode}) => {

    // const {dataMail} = useEmail()
    // console.log(dataMail)
    // const {subject, date, from} = dataMail
    const renderHTML = (rawHTML) => React.createElement ("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <div className="">
        <div className=" p-5">
          {/* <p className="text-black text-2xl">{subject[0]?.value}</p> */}
        </div>
        <div className="flex justify-between px-5">
          {/* <p className="text-black">{from[0]?.value}</p>
          <p>{date[0]?.value}</p> */}
        </div>

        <div className="flex justify-center">
            <div className="flex-1">
                {renderHTML(htmlDecode)}
            </div>
        </div>
    </div>
  )
}

export default EmailBody


