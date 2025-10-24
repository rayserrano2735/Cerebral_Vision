// You can find instructions for this file here:
// http://www.treeview.net

// Decide if the names are links or just the icons
USETEXTLINKS = 1  //replace 0 with 1 for hyperlinks

// Decide if the tree is to start all open or just showing the root folders
STARTALLOPEN = 0 //replace 0 with 1 to show the whole tree

ICONPATH = 'Support/' //change if the gif's folder is a subfolder, for example: 'images/'


USEICONS = 1

{
foldersTree = gFld("Title", "title.htm")
foldersTree.iconSrc = ICONPATH + "Gif/globe.gif"
Diag_Node = insFld(foldersTree, gFld("data_model.DM1", "diagram.htm"))
Diag_Node.iconSrc = ICONPATH + "Gif/diagram.gif"
Diag_Node.iconSrcClosed = ICONPATH + "Gif/diagram.gif"
Model_Node = insFld(Diag_Node, gFld("Logical", "Content/Model_693a4711deed48fa9020c53668d6870e.htm"))
Model_Node.iconSrc = ICONPATH + "Gif/logical.gif"
Model_Node.iconSrcClosed = ICONPATH + "Gif/logical.gif"
{
Submodel_6d3268cc22c346daaa3913a2fb19d793 = insFld(Model_Node, gFld("Main Model", "Content/Submodel_6d3268cc22c346daaa3913a2fb19d793.htm"))
Submodel_6d3268cc22c346daaa3913a2fb19d793.iconSrc = ICONPATH + "Gif/logmain.gif"
Submodel_6d3268cc22c346daaa3913a2fb19d793.iconSrcClosed = ICONPATH + "Gif/logmain.gif"
SubmodelImgNode = insDoc(Submodel_6d3268cc22c346daaa3913a2fb19d793, gLnk("R", "Model Image", "Content/Submodel_6d3268cc22c346daaa3913a2fb19d793_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_6d3268cc22c346daaa3913a2fb19d793, gFld("Entities", "Content/Sub_6d3268cc22c346daaa3913a2fb19d793_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_6d3268cc22c346daaa3913a2fb19d793, gFld("Attributes", "Content/Sub_6d3268cc22c346daaa3913a2fb19d793_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_6d3268cc22c346daaa3913a2fb19d793, gFld("Keys", "Content/Sub_6d3268cc22c346daaa3913a2fb19d793_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
RelFolder = insFld(Submodel_6d3268cc22c346daaa3913a2fb19d793, gFld("Relationships", "Content/Sub_6d3268cc22c346daaa3913a2fb19d793_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
{
Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c = insFld(Model_Node, gFld("DATA_MART", "Content/Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c.htm"))
Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c, gLnk("R", "Model Image", "Content/Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c, gFld("Entities", "Content/Sub_90b6e73bcdc3483ba9e8a0c942b25f3c_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c, gFld("Attributes", "Content/Sub_90b6e73bcdc3483ba9e8a0c942b25f3c_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_90b6e73bcdc3483ba9e8a0c942b25f3c, gFld("Keys", "Content/Sub_90b6e73bcdc3483ba9e8a0c942b25f3c_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
}
{
Submodel_4e326b8ee1fe42bc8dff85e648a7c8be = insFld(Model_Node, gFld("SOURCES", "Content/Submodel_4e326b8ee1fe42bc8dff85e648a7c8be.htm"))
Submodel_4e326b8ee1fe42bc8dff85e648a7c8be.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_4e326b8ee1fe42bc8dff85e648a7c8be.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_4e326b8ee1fe42bc8dff85e648a7c8be, gLnk("R", "Model Image", "Content/Submodel_4e326b8ee1fe42bc8dff85e648a7c8be_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_4e326b8ee1fe42bc8dff85e648a7c8be, gFld("Entities", "Content/Sub_4e326b8ee1fe42bc8dff85e648a7c8be_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_4e326b8ee1fe42bc8dff85e648a7c8be, gFld("Attributes", "Content/Sub_4e326b8ee1fe42bc8dff85e648a7c8be_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_4e326b8ee1fe42bc8dff85e648a7c8be, gFld("Keys", "Content/Sub_4e326b8ee1fe42bc8dff85e648a7c8be_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
}
{
Submodel_3107558d3f354a179cd06c0cc2aaa393 = insFld(Model_Node, gFld("UDM", "Content/Submodel_3107558d3f354a179cd06c0cc2aaa393.htm"))
Submodel_3107558d3f354a179cd06c0cc2aaa393.iconSrc = ICONPATH + "Gif/submodel.gif"
Submodel_3107558d3f354a179cd06c0cc2aaa393.iconSrcClosed = ICONPATH + "Gif/submodel.gif"
SubmodelImgNode = insDoc(Submodel_3107558d3f354a179cd06c0cc2aaa393, gLnk("R", "Model Image", "Content/Submodel_3107558d3f354a179cd06c0cc2aaa393_img.htm"))
SubmodelImgNode.iconSrc = ICONPATH + "Gif/image.gif"
SubmodelImgNode.altTxt = "Model Image"
EntityFolder = insFld(Submodel_3107558d3f354a179cd06c0cc2aaa393, gFld("Entities", "Content/Sub_3107558d3f354a179cd06c0cc2aaa393_EntFrame.htm"))
EntityFolder.iconSrc = ICONPATH + "Gif/entfldr.gif"
EntityFolder.iconSrcClosed = ICONPATH + "Gif/entfldr.gif"
AttrFolder = insFld(Submodel_3107558d3f354a179cd06c0cc2aaa393, gFld("Attributes", "Content/Sub_3107558d3f354a179cd06c0cc2aaa393_AttrFrame.htm"))
AttrFolder.iconSrc = ICONPATH + "Gif/attr.gif"
AttrFolder.iconSrcClosed = ICONPATH + "Gif/attr.gif"
IndexFolder = insFld(Submodel_3107558d3f354a179cd06c0cc2aaa393, gFld("Keys", "Content/Sub_3107558d3f354a179cd06c0cc2aaa393_IdxFrame.htm"))
IndexFolder.iconSrc = ICONPATH + "Gif/index.gif"
IndexFolder.iconSrcClosed = ICONPATH + "Gif/index.gif"
RelFolder = insFld(Submodel_3107558d3f354a179cd06c0cc2aaa393, gFld("Relationships", "Content/Sub_3107558d3f354a179cd06c0cc2aaa393_RelFrame.htm"))
RelFolder.iconSrc = ICONPATH + "Gif/relfldr.gif"
RelFolder.iconSrcClosed = ICONPATH + "Gif/relfldr.gif"
}
}
