const express=require('express')
const path=require('path')
const router=express.Router()
const blogs=require('../data/blogs')
router.get('/',(req,res)=>{
      res.render('home');
   // res.sendFile(path.join(__dirname,'../templates/index.html') )
})
router.get('/blog',(req,res)=>{
   // blogs.forEach(e=>{
   //    console.log(e.title)
   // });
   // res.sendFile(path.join(__dirname,'../templates/bloghome.html') )
   res.render('blogHome',{
      blogs:blogs
   });


})
router.get('/blogpost/:slug',(req,res)=>{
   myBlog=blogs.filter((e)=>{
      return e.slug==req.params.slug
   })
   // console.log(myBlog)
   res.render('blogPage',{
    title:myBlog[0].title,
    content:myBlog[0].content
   });
   // res.sendFile(path.join(__dirname,'../templates/blogPage.html'))
})

// router.get('/blogpost/:slug',(req,res)=>{
//    myBlog=blogs.filter((e)=>{
//    return e.slug==req.params.slug;
//    })
//    console.log(myBlog)
   // res.sendFile(path.join(__dirname,'../templates/blogpage.html'))

// })
module.exports=router