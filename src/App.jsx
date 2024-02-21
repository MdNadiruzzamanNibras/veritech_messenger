

const App = () => {
  const message = [
    {
      a: "this first message",
      b:"fist meassage "
    },
    {
      a: "this first message",
      b:"fist meassage "
    },
    {
      a: "this first message",
      b:"fist meassage "
    },
    {
      a: "this first message",
      b:"fist meassage "
    },
  ]
  return (
    <div className="container mx-auto">
      <div>
        <div>
          {
            message.map((m, index) => <div key={index}>
            
              <div className="flex justify-start">
                <p className="text-xl ">{m.a }</p>
              </div>
              <div className="flex justify-end lg:mr-20">
                <p className="text-xl ">{m.b }</p>
              </div>
              
            
            </div>)
          }
        </div>
        <div className="absolute bottom-5 left-96">
          <input type="text" className="w-96 h-10 bottom-0 rounded-full border border-gray-900" />
        </div>
     </div>
    </div>
  );
};

export default App;