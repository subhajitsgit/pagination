using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webapi.Models;

public partial class MasterContext : DbContext
{
    public MasterContext()
    {
    }

    public MasterContext(DbContextOptions<MasterContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TblProduct> TblProducts { get; set; }
    public virtual DbSet<TblType> TblTypes { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("server=LAPTOP-EQPKCMK5;initial catalog = Admin;user=sa;password=john1989;Trusted_Connection=True;TrustServerCertificate=True;");


   


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TblProduct>(entity =>
        {
            entity.ToTable("tblProduct");
            entity.Property(e => e.CreatedOn).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(50).IsUnicode(false);
        });

        modelBuilder.Entity<TblType>(entity =>
        {
            entity.ToTable("tblType");
            entity.Property(e => e.Type).HasMaxLength(50).IsUnicode(false);
        });
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
