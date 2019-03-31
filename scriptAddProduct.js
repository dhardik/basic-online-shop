var divNewProductPanel=document.getElementById("divNewProductPanel");
var aAddProduct=document.getElementById("aAddProduct");
var divListofProducts=document.getElementById("divListofProducts");

var products=[];
var productID=1;

aAddProduct.addEventListener("click",function(event)
{
  createAddProductPanel();
});

function unhideAddNewProductLink()
{
  aAddProduct.setAttribute("style","visibility:visible");
}

function hideAddNewProductLink()
{
  aAddProduct.setAttribute("style","visibility:hidden");
}

function insertLineInDiv(targetDiv)
{
  var br=document.createElement("br");
  targetDiv.appendChild(br);
}

function addProductToDOM(obj)
{
  var divProduct=document.createElement("div");
  divProduct.setAttribute("id",productID);

  var productName=document.createElement("p");
  productName.innerHTML="Name -> "+obj.Name+"<br>Description -> "+obj.Desc+"<br>Price -> "+obj.Price+"<br>Quantity -> "+obj.Qty;
  divProduct.appendChild(productName);

  divListofProducts.appendChild(divProduct);
}

function removeAddProductPanel()
{
  var childNodes = divNewProductPanel.childNodes;
   for (var i = 0; childNodes.length > 0;)
   {
     divNewProductPanel.removeChild(childNodes[i]);
   }
}

function addProductToArray()
{
  var objProduct=new Object;
  objProduct.id=productID;
  objProduct.Name=document.getElementById("productNameInput").value;
  objProduct.Desc=document.getElementById("productDescInput").value;
  objProduct.Price=document.getElementById("productPriceInput").value;
  objProduct.Qty=document.getElementById("productQtyInput").value;
  products.push(objProduct);
  addProductToDOM(objProduct);
  removeAddProductPanel();
  unhideAddNewProductLink();
  productID++;
}

function createAddProductPanel()
{
  hideAddNewProductLink();

  /* Heading of the Add New Product Panel */
  var newProductHeading=document.createElement("h1");
  newProductHeading.innerHTML="Add New Product";
  divNewProductPanel.appendChild(newProductHeading);

  /* Name of the Product */

  var productNameLabel=document.createElement("label");
  productNameLabel.innerHTML="Name : ";
  divNewProductPanel.appendChild(productNameLabel);

  var productNameInput=document.createElement("input");
  productNameInput.setAttribute("id","productNameInput");
  productNameInput.setAttribute("type","text");
  divNewProductPanel.appendChild(productNameInput);

  insertLineInDiv(divNewProductPanel);
  insertLineInDiv(divNewProductPanel);

  /* Description of the Product */
  var productDescLabel=document.createElement("label");
  productDescLabel.innerHTML="Description : ";
  divNewProductPanel.appendChild(productDescLabel);

  var productDescInput=document.createElement("input");
  productDescInput.setAttribute("id","productDescInput");
  divNewProductPanel.appendChild(productDescInput);

  insertLineInDiv(divNewProductPanel);
  insertLineInDiv(divNewProductPanel);

  /* Price of the Product */
  var productPriceLabel=document.createElement("label");
  productPriceLabel.innerHTML="Price : ";
  divNewProductPanel.appendChild(productPriceLabel);

  var productPriceInput=document.createElement("input");
  productPriceInput.setAttribute("id","productPriceInput");
  divNewProductPanel.appendChild(productPriceInput);

  insertLineInDiv(divNewProductPanel);
  insertLineInDiv(divNewProductPanel);

  /* Quantity Of Product */
  var productQtyLabel=document.createElement("label");
  productQtyLabel.innerHTML="Quantity : ";
  divNewProductPanel.appendChild(productQtyLabel);

  var productQtyInput=document.createElement("input");
  productQtyInput.setAttribute("id","productQtyInput");
  divNewProductPanel.appendChild(productQtyInput);

  insertLineInDiv(divNewProductPanel);
  insertLineInDiv(divNewProductPanel);

  /* add product button */

  var addProductBtn=document.createElement("button");
  addProductBtn.innerHTML="Add Product";
  addProductBtn.setAttribute("id","addProductBtn");
  divNewProductPanel.appendChild(addProductBtn);

  addProductBtn.addEventListener("click",function(event)
{
  addProductToArray();
});
}
