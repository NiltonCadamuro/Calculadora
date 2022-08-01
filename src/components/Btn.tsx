interface a {
    value: [...string[]];
}

export const Btn = ({value}: any) => {
    return (
        value.map((number: string, i: number) => 
        <div key={i} id={value[i]} className="
            cursor-pointer
            bg-gray-400 
            mx-[5px]
            my-4
            h-14 
            w-14 
            rounded 
            border 
            border-gray-100 
            flex 
            items-center 
            justify-center 
            text-2xl"
        >
            {number}
        </div>)
    )
}

/* 
<div 
            className="bg-gray-400 
            h-14 
            w-14 
            rounded 
            border 
            border-gray-100 
            flex 
            items-center 
            justify-center 
            text-2xl"
        >
            {props.value.map((value) => value)}
        </div>
*/