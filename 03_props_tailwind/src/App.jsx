import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  let arr=[1,2,3];
  let obj={ name:"Apple", price: 999};
  let obj2={ name:"Samsung", price: 799};
  return (
    <>
      <h1 className="font-bold bg-green-400 text-black rounded-xl p-2">
        Tailwind CSS Test
      </h1>
      {/* Now we can pass props/property to each component  */}
      <Card username= "Rupam" btntxt="visit profile"/>
      <Card username="Aniket"/>
      <Card2 product="Macbook Air" myArr={arr} data={obj}/>
      <Card2 data={obj2}/>
    </>
  )
}

export default App
