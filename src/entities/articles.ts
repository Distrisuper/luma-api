import {
  Entity,
  PrimaryColumn,
  Column,
} from "typeorm";

@Entity("ARTICULOS")
export class Article {
  @PrimaryColumn({ type: "varchar", length: 10 })
  COD_ARTICU!: string;

  @Column({ type: "char", length: 1 })
  ACEPTADECIMALES!: string;

  @Column({ type: "int" })
  APLICACION!: number;

  @Column({ type: "char", length: 1 })
  AUTOMODIFICA!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  COD_BARRA?: string;

  @Column({ type: "varchar", length: 10 })
  COD_IVA!: string;

  @Column("decimal", { precision: 5, scale: 2 })
  PORCENTAJE_IVA!: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  COD_RUBRO?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  RUBRO?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  COM_DUPLICADO?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  COM_PRODUCTOS?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  COM_RUBRO?: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  CTA_VENTA?: string;

  @Column({ type: "varchar", length: 255 })
  DESCRIPCION!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  DESCRIPCION_COMANDA?: string;

  @Column({ type: "char", length: 1 })
  ESCOMPUESTO!: string;

  @Column({ type: "char", length: 1 })
  ES_MODIFICADOR!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  MODIFICADOR?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  MODIFICADOR_EN_APP?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  ORIGEN_IMPORTE?: string;

  @Column({ type: "char", length: 1 })
  PERMITE_MENSAJE!: string;

  @Column("decimal", { precision: 10, scale: 2, default: 0.00 })
  PRECIO_DELIVERY!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  PRECIO_MOSTRADOR!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  PRECIO_SALON!: number;

  @Column("decimal", { precision: 5, scale: 2, nullable: true })
  PORCENTAJE_TAX1?: number;

  @Column("decimal", { precision: 5, scale: 2, nullable: true })
  PORCENTAJE_TAX2?: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  REGLA_ACTIVIDAD?: string;

  @Column({ type: "int", nullable: true })
  ID_FOTO?: number;

  @Column({ type: "datetime", nullable: true })
  TIEMPO?: Date;

  @Column({ type: "int", default: 1 })
  STOCK!: number;
}

