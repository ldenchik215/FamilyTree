document.addEventListener('DOMContentLoaded', () => {
    // Select all folder nodes (nodes that are not empty files)
    const treeNodes = document.querySelectorAll('.tree-node:not(.empty)');

    // Expand the root folder by default
    const rootNode = document.querySelector('.folder-tree > li > .tree-node');
    if (rootNode) {
        rootNode.classList.add('expanded');
        const rootUl = rootNode.nextElementSibling;
        if (rootUl && rootUl.tagName === 'UL') {
            rootUl.classList.add('open');
        }
    }

    // Toggle folders on click
    treeNodes.forEach(node => {
        node.addEventListener('click', () => {
            const childList = node.nextElementSibling;
            if (childList && childList.tagName === 'UL') {
                // Toggle open class on child list
                childList.classList.toggle('open');
                // Toggle expanded class on parent node for icon rotation
                node.classList.toggle('expanded');
                
                // Change folder icon icon if desired
                const iconSpan = node.querySelector('.tree-node-icon');
                if (iconSpan) {
                    if (childList.classList.contains('open')) {
                        iconSpan.textContent = '📂';
                    } else {
                        iconSpan.textContent = '📁';
                    }
                }
            }
        });
    });
    
    // Add expand all / collapse all buttons helpers if they exist
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    
    if (expandAllBtn && collapseAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            document.querySelectorAll('.folder-tree ul').forEach(ul => {
                ul.classList.add('open');
            });
            document.querySelectorAll('.tree-node:not(.empty)').forEach(node => {
                node.classList.add('expanded');
                const iconSpan = node.querySelector('.tree-node-icon');
                if (iconSpan) iconSpan.textContent = '📂';
            });
        });
        
        collapseAllBtn.addEventListener('click', () => {
            // Keep root open, collapse others
            document.querySelectorAll('.folder-tree ul').forEach(ul => {
                if (ul.id !== 'root-folder-list') {
                    ul.classList.remove('open');
                }
            });
            document.querySelectorAll('.tree-node:not(.empty)').forEach(node => {
                if (node.id !== 'root-folder-node') {
                    node.classList.remove('expanded');
                    const iconSpan = node.querySelector('.tree-node-icon');
                    if (iconSpan) iconSpan.textContent = '📁';
                }
            });
        });
    }
});
