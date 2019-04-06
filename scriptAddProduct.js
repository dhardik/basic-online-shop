var aAddProduct=document.getElementById("aAddProduct");
var divNewProductPanel=document.getElementById("divNewProductPanel");
var divListofProducts=document.getElementById("divListofProducts");

var products=[];
var targetID;

aAddProduct.addEventListener("click",function(event)
{
  targetID=-1;
  createNewProductPanel();
});

/* Generic function to add a <br> line in a div */
function insertLine(targetDiv)
{
  var br=document.createElement("br");
  targetDiv.appendChild(br);
}

/* refresh all elements acc to updated array */
function refreshProductList()
{
  removeProductsFromDOM();
  addProductsToDOM();
}

function removeProductsFromDOM()
{
  var childNodes=divListofProducts.childNodes;
  for(var i=0;childNodes.length>0;)
  {
    divListofProducts.removeChild(childNodes[i]);
  }
}

function addProductsToDOM()
{
  for(var i=0;i<products.length;i++)
  {
    var divProduct=document.createElement("div");
    divProduct.setAttribute("id",i);

    var pProducts=document.createElement("p");
    pProducts.innerHTML="Name : "+products[i].name+"<br>Description : "+products[i].desc+"<br>Price : "+products[i].price+"<br>Quantity : "+products[i].qty+"<br>";
    divProduct.appendChild(pProducts);

    /* deleteButton to delete that Product */
    var deleteButton=document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.addEventListener("click",function(event)
  {
    var targetID=event.target.parentNode.id;
    products.splice(targetID,1);
    refreshProductList();
  });
    divProduct.appendChild(deleteButton);

    /* editButton to edit product details */
    var editButton=document.createElement("button");
    editButton.innerHTML="Edit";
    editButton.addEventListener("click",function(event)
  {
    targetID=event.target.parentNode.id;
    hideProductList();
    createNewProductPanel();
  });
    divProduct.appendChild(editButton);

    divListofProducts.appendChild(divProduct);
  }
}

function hideProductList()
{
  divListofProducts.setAttribute("style","visibility:hidden");
}

function unhideProductList()
{
  divListofProducts.setAttribute("style","visibility:visible");
}

function removeNewProductPanel()
{
  unhideAddProduct();
  var childNodes=divNewProductPanel.childNodes;
  for(var i=0;i<childNodes.length;)
  {
    divNewProductPanel.removeChild(childNodes[i]);
  }
}

function addProductToArray()
{
  var objProd=new Object;
  var count=0;
  if((document.getElementById("nameInput").value)=="")
  {
    alert("Enter Product Name");
  }
  else
  {
    objProd.name=document.getElementById("nameInput").value;
    count++;
  }
  if((document.getElementById("descInput").value)=="")
  {
    alert("Enter Product Description");
  }
  else
  {
    objProd.desc=document.getElementById("descInput").value;
    count++;
  }
  if((document.getElementById("priceInput").value)=="")
  {
    alert("Enter Product Price");
  }
  else
  {
    objProd.price=document.getElementById("priceInput").value;
    count++;
  }
  if((document.getElementById("qtyInput").value)=="")
  {
    alert("Enter Product Quantity");
  }
  else
  {
    objProd.qty=document.getElementById("qtyInput").value;
    count++;
  }
  if(count==4)
  {
    products.push(objProd);
    alert("Record has successfully been submitted");
    refreshProductList();
    removeNewProductPanel();
  }
}

function unhideAddProduct()
{
  aAddProduct.setAttribute("style","visibility:visible");
}

function hideaAddProduct()
{
  aAddProduct.setAttribute("style","visibility:hidden");
}

function createNewProductPanel()
{
  hideaAddProduct();

  var nameLabel=document.createElement("label");
  nameLabel.innerHTML="Name : ";
  divNewProductPanel.appendChild(nameLabel);

  var nameInput=document.createElement("input");
  nameInput.setAttribute("type","text");
  nameInput.setAttribute("placeholder","Enter Product name");
  nameInput.setAttribute("id","nameInput");
  if(targetID!=-1)
  {
    nameInput.value=products[targetID].name;
  }
  divNewProductPanel.appendChild(nameInput);

  insertLine(divNewProductPanel);
  insertLine(divNewProductPanel);

  var descLabel=document.createElement("label");
  descLabel.innerHTML="Description : ";
  divNewProductPanel.appendChild(descLabel);

  var descInput=document.createElement("input");
  descInput.setAttribute("type","text");
  descInput.setAttribute("placeholder","Enter Product Description");
  descInput.setAttribute("id","descInput");
  if(targetID!=-1)
  {
    descInput.value=products[targetID].desc;
  }
  divNewProductPanel.appendChild(descInput);

  insertLine(divNewProductPanel);
  insertLine(divNewProductPanel);

  var priceLabel=document.createElement("label");
  priceLabel.innerHTML="Price : ";
  divNewProductPanel.appendChild(priceLabel);

  var priceInput=document.createElement("input");
  priceInput.setAttribute("type","text");
  priceInput.setAttribute("placeholder","Enter Unit Price");
  priceInput.setAttribute("id","priceInput");
  if(targetID!=-1)
  {
    priceInput.value=products[targetID].price;
  }
  divNewProductPanel.appendChild(priceInput);

  insertLine(divNewProductPanel);
  insertLine(divNewProductPanel);

  var qtyLabel=document.createElement("label");
  qtyLabel.innerHTML="Quantity : ";
  divNewProductPanel.appendChild(qtyLabel);

  var qtyInput=document.createElement("input");
  qtyInput.setAttribute("type","text");
  qtyInput.setAttribute("placeholder","Enter Quantity");
  qtyInput.setAttribute("id","qtyInput");
  if(targetID!=-1)
  {
    qtyInput.value=products[targetID].qty;
  }
  divNewProductPanel.appendChild(qtyInput);

  insertLine(divNewProductPanel);
  insertLine(divNewProductPanel);

  if(targetID!=-1)
  {
    var submitChangesButton=document.createElement("button");
    submitChangesButton.innerHTML="submit changes";
    submitChangesButton.addEventListener("click",function(event)
  {
    products[targetID].name=document.getElementById("nameInput").value;
    products[targetID].desc=document.getElementById("descInput").value;
    products[targetID].price=document.getElementById("priceInput").value;
    products[targetID].qty=document.getElementById("qtyInput").value;
    refreshProductList();
    unhideProductList();
    removeNewProductPanel();
  });
    divNewProductPanel.appendChild(submitChangesButton);
  }
  else
  {
    var addProductBtn=document.createElement("button");
    addProductBtn.innerHTML="Add This Product";
    addProductBtn.addEventListener("click",function(event)
  {
    addProductToArray();
  });
    divNewProductPanel.appendChild(addProductBtn);
  }
}
