using GroceryAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GroceryAPI.Data
{
    public class groceryDbContext : DbContext
    {
        public groceryDbContext(DbContextOptions options): base(options) {
        }

        public DbSet<product> Products { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>().HasData(new User
            {
                UserId = 100,
                Name = "Admin",
                Email = "Mentor@nagarro.com",
                Mobile = "8287530685",
                Pwd = "AdminRights",
                IsAdmin = true,
                MemberSince = DateTime.Now
            });
        }

    }
}
