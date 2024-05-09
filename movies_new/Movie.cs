using static System.Runtime.InteropServices.JavaScript.JSType;

namespace movies_new
{
    public class Movie
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        //[DataType(DataType.Date)]
        //public DateTime? RelaseDate { get; set; }

        public int? ReleaseDate { get; set; }
        public float? Rate { get; set; }
        public string? Picture { get; set; }
    }
}
