import {configureStore} from "@reduxjs/toolkit"
import  sl  from "../Feature/Slice"
 const s = configureStore({
    reducer :{
      co :sl
    }
})

export {s}