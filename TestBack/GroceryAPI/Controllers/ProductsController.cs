using GroceryAPI.Data;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly groceryDbContext _groceryDbContext;

        public ProductsController(groceryDbContext groceryDbContext)
        {
            this._groceryDbContext = groceryDbContext;
        }






        //[HttpGet]
        //[Route("ProductByCategory/{category}")]
        //public async Task<IActionResult> ProductByCategory(string category)
        //{
        //    var products = await _groceryDbContext.Products.Where(item => item.category == category).ToListAsync();
        //    return Ok(products);
        //}
   


        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _groceryDbContext.Products.ToListAsync();
            return Ok(products);
        }


      
        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] product productRequest)
        {
            productRequest.productId = Guid.NewGuid();

            await _groceryDbContext.Products.AddAsync(productRequest);
            await _groceryDbContext.SaveChangesAsync();

            return Ok(productRequest);


        }

        [HttpGet]
        [Route("{productId:Guid}")]
        public async Task<IActionResult> GetProduct([FromRoute] Guid productId)
        {
            var product = await _groceryDbContext.Products.FirstOrDefaultAsync(x => x.productId == productId);

            if(product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPut]
        [Route("{productId:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid productId, product updateProductRequest)
        {
            var product = await _groceryDbContext.Products.FindAsync(productId); 

            if(product == null)
            {
                return NotFound();
            }

            product.productName = updateProductRequest.productName;
            product.productDescription = updateProductRequest.productDescription;
            product.category = updateProductRequest.category;
            product.availableQuantity = updateProductRequest.availableQuantity;
            product.price = updateProductRequest.price;
            product.discount = updateProductRequest.discount;
            product.img = updateProductRequest.img;
            product.specification = updateProductRequest.specification;

            await _groceryDbContext.SaveChangesAsync();

            return Ok(product);
        }

        [HttpDelete]
        [Route("{productId:Guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid productId)
        {
            var product = await _groceryDbContext.Products.FindAsync(productId);

            if (product == null)
            {
                return NotFound();
            }

            _groceryDbContext.Products.Remove(product);
            await _groceryDbContext.SaveChangesAsync();

            return Ok(product);

        }

        [HttpGet]
        [Route("ProductByCategory/{category}")]
        public async Task<IActionResult> ProductByCategory(string category)
        {

            var products = await _groceryDbContext.Products.Where(item => item.category == category).ToListAsync();
            return Ok(products);
        }
        [HttpDelete]
        [Route("DeleteFromCart/{UserName}/{productId}")]
        public async Task<IActionResult> DeleteFromCart(string UserName, Guid productId)
        {
            List<Order> products = await _groceryDbContext.Orders.Where(item => item.username == UserName).ToListAsync();



            foreach (var item in products)
            {
                if (item.productId == productId)
                {
                    _groceryDbContext.Orders.Remove(item);
                }
            }



            await _groceryDbContext.SaveChangesAsync();



            return Ok();



        }
        [HttpPost]
        [Route("AddToCart")]
        public Order AddProductToCart([FromBody] Order order)
        {
            _groceryDbContext.Orders.Add(order);
            _groceryDbContext.SaveChanges();

            return order;

        }
        [HttpGet]
        [Route("GetProductCart/{UserName}")]
        public List<Order> GetProductToCart(string UserName)
        {
            List<Order> prod = _groceryDbContext.Orders.Where(item => item.username == UserName).ToList();
            return prod;

        }





    }
}
