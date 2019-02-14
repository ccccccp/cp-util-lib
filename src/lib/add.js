export default (...args)=>args.reduce((total,item)=>{
    return total + item;
},0)