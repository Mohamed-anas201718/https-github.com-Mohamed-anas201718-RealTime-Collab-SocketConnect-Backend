const express = require('express');
const verifyToken = require('../middleware/auth');
const Document = require('../modules/Document');

const router = express.Router();

// GET All Documents
router.get('/', verifyToken, async (req, res) => {
    try {
        const documents = await Document.find({});
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET Document by ID
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// UPDATE Document
router.put('/:id', verifyToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        res.json(updatedDocument);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE Document
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);
        res.json({ message: 'Document deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;




















/*
const express = require('express');
const verifyToken = require('../middleware/auth');
const Document = require('../modules/Document');

const router = express.Router();

// GET All Documents
router.get('/', verifyToken, async (req, res) => {
    try {
        const documents = await Document.find({});
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET Document by ID
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }
        res.json(document);
    } catch (error) {
        console.error('Error fetching document:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// UPDATE Document
router.put('/:id', verifyToken, async (req, res) => {
    const { title, content } = req.body;
    try {
        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true }
        );
        res.json(updatedDocument);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// DELETE Document
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Document.findByIdAndDelete(req.params.id);
        res.json({ message: 'Document deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

*/
















/*



const express=require('express');
const Document=require('../modules/Document');
const {verifyToken} =require('../middleware/auth');
const router=express.Router();
router.get('/',verifyToken,async(req,res)=>
{
    try{
        const documents=await Document.find({});
        res.json(documents);
    }
    catch(error)
    {
        res.status(500).json({message:'Server error'});
    }
}
);
router.get('/:id',verifyToken,async(req,res)=>
    {
        try{
            const documents=await Document.findById(req.params.id);
            if(!document)
            {
                return res.status(404).json({message:'Document not found'});
            }
            res.json(documents);
        }
        catch(error)
        {
            console.error('Error fetching document:',error);
            res.status(500).json({message:'Server error'});
        }
    }
    );
router.put('/:id',verifyToken, async (req,res)=>
{
    const {title,content}=req.body;
    try{
        const updatedocument=await Document.findByIdAndUpdate(req.params.id,{title,content},{new:true});
           res.json(updateDocument);
        }
        catch(error)
        {
            res.status(500).json({message:'Server Error'})
        }
});
router.delete('/:id',verifyToken, async (req,res)=>
    {
       
        try{
            await Document.findByIdAndUpdate(reg.params.id);
        res.json({message:'Document delete'});       
        }
            catch(error)
            {
                res.status(500).json({message:'Server Error'})
            }
    });
    module.exports=router;

    */