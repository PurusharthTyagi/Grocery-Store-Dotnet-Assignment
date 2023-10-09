namespace GroceryAPI.Models
{
    public class product
    {
        public Guid productId { get; set; }

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
