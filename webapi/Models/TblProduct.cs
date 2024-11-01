namespace webapi.Models
{
    public class TblProduct
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? TypeId { get; set; }
        public int? Quantity { get; set; }
        public int? Percentage { get; set; }
        public bool? InStock { get; set; }
        public bool? IsDeleted { get; set; }
        public DateTime? CreatedOn { get; set; }
        public int? CreatedBy { get; set; }
    }
}
