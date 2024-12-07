const myobject ={
    js: 'javascript',
    cpp:"C++",
    rb: "ruby",
    py:"python"
}

for (const key in myobject) {
    console.log(`${key} shortcut if for ${myobject[key]}`);
}