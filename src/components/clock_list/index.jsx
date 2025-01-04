import Clock_collection_item from "./clock_collections";

const ClockList = ({ clockList }) => {
  console.log("The clock list is here ", clockList); // কনসোল লগ সঠিকভাবে কাজ করবে

  return (
    <div>
      {clockList.map((value, index) => (
        // `return` ব্যবহারের প্রয়োজন নেই কারণ এটি সরাসরি JSX রিটার্ন করছে।
        <Clock_collection_item key={index} clock={value} />
      ))}
    </div>
  );
};

export default ClockList;
