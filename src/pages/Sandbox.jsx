import logo from '../assets/images/waluigi.jpg'
export function Sandbox() {
  return (
    <>
      <h1>Sandbox</h1>

      <div className="Flex">
        <img src={logo} height={40} ></img>
        <p className="Item">"Flex"</p>
        <p className="Item">"Flex"</p>
        <p className="Item">"Flex"</p>
      </div>

      <div className="FlexBox">
        <img src={logo} height={40} ></img>
        <p className="Item">"FlexBox"</p>
        <p className="Item">"FlexBox"</p>
        <p className="Item">"FlexBox"</p>
      </div>

      <div className="Block">
        <img src={logo} height={40} ></img>
        <p className="Item">"Block"</p>
        <p className="Item">"Block"</p>
        <p className="Item">"Block"</p>
      </div>

      <div className="BlockInline">
        <img src={logo} height={40} ></img>
        <p className="Item">"BlockInline"</p>
        <p className="Item">"BlockInline"</p>
        <p className="Item">"BlockInline"</p>
      </div>

      <div className="Inline">
        <img src={logo} height={40} ></img>
        <p className="Item">"Inline"</p>
        <p className="Item">"Inline"</p>
        <p className="Item">"Inline"</p>
      </div>

      <div className="Grid">
        <img src={logo} height={40} ></img>
        <p className="Item">"Grid"</p>
        <p className="Item">"Grid"</p>
        <p className="Item">"Grid"</p>
      </div>

      <div className="FlowRoot">
        <img src={logo} height={40} ></img>
        <p className="Item">"FlowRoot"</p>
        <p className="Item">"FlowRoot"</p>
        <p className="Item">"FlowRoot"</p>
      </div>

      <div className="Table">
        <img src={logo} height={40} ></img>
        <p className="Item">"Table"</p>
        <p className="Item">"Table"</p>
        <p className="Item">"Table"</p>
      </div>
    </>
  );
};
