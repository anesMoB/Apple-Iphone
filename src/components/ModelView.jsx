import { useState } from 'react'
import IphoneModelView from './IphoneModelView'
import { models, sizes } from '../constants'
import { blackImg, blueImg, whiteImg, yellowImg } from '../utils'

function ModelView() {
    const [color, setColor] = useState('#8F8A81')
    const [title, setTitle] = useState('iPhone 15 Pro in Natural Titanium')
    const [modelSize,setModelSize]=useState('small')
    const [modelTexture,setModelTexture]=useState(yellowImg)
    const textures=useState([
         yellowImg ,
         blueImg ,
         whiteImg ,
         blackImg,
    ])
    return (
        <div className='w-screen max-h-screen mb-8 bg-black'>
            <div className="max-screen-width h-full flex flex-col justify-between items-start pt-8">
                <h1 className='text-white opacity-80 text-2xl md:text-4xl pl-8 '>Take a closer look.</h1>
                <div className='w-full h-[78vh]'><IphoneModelView  color={color} modelSize={modelSize} texture={modelTexture}/></div>
                <div className='w-full h-20 bg-black flex-center-col gap-4'>
                        <p className='opacity-80 font-semibold text-lg'>{title}</p>
                    <div className='w-auto h-full flex-center gap-4 '>
                       <div className='flex-center gap-4 p-2 bg-gray-800 rounded-4xl'>
                         {models.map((model, index) => {
                            return <div key={model.id}
                            onClick={()=>{
                                setColor(model.color[0])
                                setTitle(model.title)
                                setModelTexture(textures[index])
                            }}
                            className={`w-6 h-6 rounded-full cursor-pointer
                                ${color ==model.color[0] ? 'border-2 border-teal-500' : "border-0"}
                                `} style={{ backgroundColor: model.color[0] }}></div>
                        })}
                       </div>
                        <div className='bg-gray-800  h-8 w-16 flex-center rounded-full gap-1 '>
                            {sizes.map((size) => {
                                return <div 
                                
                                key={size.value} 
                                onClick={()=>setModelSize(size.value)}
                                className={`cursor-pointer transition-colors ease-in flex-center ${modelSize == size.value ? 'bg-gray-600' : "bg-gray-800"} w-8 h-8 rounded-full p-2`} >{size.label}</div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModelView