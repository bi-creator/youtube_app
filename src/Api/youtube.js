import axios from "axios";
const KEY='AIzaSyAUHt6Y0Qhjkdwry_wGeTGmkiLGDDds3bc'

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
      part:'snippet',
      maxResult:5,
      key:KEY,
      type: 'video',
    }
})