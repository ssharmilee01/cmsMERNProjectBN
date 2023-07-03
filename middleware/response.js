const response =({data,resCode,resMsg}) => {
    let res={
        data:{content:data},
        resCode,
        resMsg
    }

  return res;
}

export default response