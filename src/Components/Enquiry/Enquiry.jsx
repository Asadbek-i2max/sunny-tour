import './enquiry.css';
const Enquiry = () => {
  const handleEnquiry = () => {
    window.location.href = 'https://t.me/XusanHalmatov';
  }
  return (
    <>
      <div className="enquiry_con">
        <h2 className="enq_text">Speak to us About Your <span>Travel Plans</span>, We are here to <span>help!</span></h2>
        <button className="enq_btn" onClick={handleEnquiry}>Make an Enquiry</button>
      </div>
    </>
  );
};

export default Enquiry;
