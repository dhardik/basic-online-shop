var aAddProduct=document.getElementById("aAddProduct");
var divNewProductPanel=document.getElementById("divNewProductPanel");
var divListofProducts=document.getElementById("divListofProducts");

var products=[];

aAddProduct.addEventListener("click",function(event)
{
  createNewProductPanel();
});

/* Generic function to add a <br> line in a div */
function insertLine(targetDiv)
{
  var br=document.createElement("br");
  targetDiv.appendChild(br);
}

/* refresh all elements acc to updated array */
function refreshDOM()
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

    var deleteButton=document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.addEventListener("click",function(event)
  {
    var targetID=event.target.parentNode.id;
    products.splice(targetID,1);
    refreshDOM();
  });
    divProduct.appendChild(deleteButton);
    
    divListofProducts.appendChild(divProduct);
  }
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
    refreshDOM();
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
  divNewProductPanel.appendChild(qtyInput);

  insertLine(divNewProductPanel);
  insertLine(divNewProductPanel);

  var addProductBtn=document.createElement("button");
  addProductBtn.innerHTML="Add This Product";
  addProductBtn.addEventListener("click",function(event)
{
  addProductToArray();
});
  divNewProductPanel.appendChild(addProductBtn);
}
