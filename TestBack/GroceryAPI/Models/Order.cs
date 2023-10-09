using System.ComponentModel.DataAnnotations;

namespace GroceryAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public Guid productId { get; set; }
        public string username { get; set; }

        public string productName { get; set; }

        public string productDescription { get; set; }

        public string category { get; set; }

        public int availableQuantity { get; set; }

        public double price { get; set; }

        public double discount { get; set; }

        public string img { get; set; }

        public string specification { get; set; }


    }
}
