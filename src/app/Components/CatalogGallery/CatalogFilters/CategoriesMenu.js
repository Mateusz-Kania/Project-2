import React from 'react'
import "./CollapsePaddingReduce.css"
import FiltersCollapse from "./FiltersCollapse";
import {Tree} from "antd"
let {TreeNode} = Tree;

function CategoryMenu(props){

    let {categoryTree,productsFoundInfo,selectedCategories} = props;


    let collapseStyle={
        marginBottom:7
    }

    function handleClick(categorySlug){

        let filterInfo={
            slug:"CATEGORY",
            value:categorySlug[0] || null
        };

        console.log(filterInfo);
    }




    function mapMenuNodes(key,categoryTreeNode){

         if (productsFoundInfo.categoriesFound[key]) {
        return(
            <TreeNode
                style={{padding:2}}
                title={`${categoryTreeNode[key].name} (${productsFoundInfo.categoriesFound[key]})`}
                key={key}
            >
                {
                    Object.keys(categoryTreeNode[key].subcategories).map((nextKey)=>mapMenuNodes(nextKey,categoryTreeNode[key].subcategories))
                }
            </TreeNode>

        )
              }
              return "";

    }




    return(
        <div>
            <FiltersCollapse  contentHeight={150} style={collapseStyle} title={"Kategoria"} defaultActive>
                <Tree
                    selectable
                    selectedKeys={selectedCategories}
                    defaultExpandedKeys={selectedCategories}
                    onSelect={handleClick}
                >
                    {
                        Object.keys(categoryTree).map((key)=>mapMenuNodes(key,categoryTree))
                    }
                </Tree>
            </FiltersCollapse>

        </div>
    )



}

export default CategoryMenu;