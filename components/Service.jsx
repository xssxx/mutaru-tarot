import React from "react";
import Card from "../components/Card";

const Service = () => {
  return (
    <div className="flex flex-col items-center py-8 bg-gradient-to-b from-[#c494e1] to-[#7e6bbd] pb-20">
      <div className="bg-gradient-to-b from-[#c494e1] to-[#b87fdb] w-full h-[4rem]"></div>
      <div className="flex flex-col items-center w-full text-gray-100 text-4xl py-10">
        <p>แพคดูดวง </p>
        <p>fortune telling pack</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4 xl:gap-12">
        <Card name="Call กรุบ!" price={["25 นาที 389.-"]}>
          <p>เปิดดวงจากไพ่ทาโร่ต์</p>
          <p>เม้ามอยไปเลยไม่กั๊ก</p>
          <p>สงสัยอะไรถามได้เลย</p>
          <p>ปิดพื้นดวง 1 กอง</p>
          <p>อีกกองเป็นคำถาม 25 นาที</p>
        </Card>
        <Card name="ออราเคิล ด่วน!" price={["1 คำถาม 129.-", "2 คำถาม 199.-"]}>
          <p>อ่านใจด้วยไพ่ออราเคิล</p>
          <p>ให้ไพ่นำพาไปสู่ พลังงานดี ๆ</p>
          <p>อ่านแล้วสบายใจไม่เครียด</p>
          <p>ส่งคำถามภายใน 48 ชม.</p>
        </Card>
        <Card
          name="แพคเปิดไพ่ด่วน!!"
          price={["1 คำถาม 99.-", "2 คำถาม 169.-", "4 คำถาม 289.-"]}
        >
          <p>แพคสำหรับคนรีบ</p>
          <p>จะตอบกลับเป็นคลิปไพ่</p>
          <p>ก่อนเที่ยงคืน ภายใน 2 วัน</p>
          <p>หลังจากวันที่ส่งคำถามครับ</p>
          <p>* งดเร่งพี่หมอนะค๊าบ *</p>
        </Card>
        <Card
          name="แพค Video+Oracle"
          price={["40 นาที 498.-", "+wallpaper = 889.-"]}
        >
          <ul className="text-left pl-4 list-disc m-auto">
            <li>เปิดดวงจากไพ่มาโร่ต์</li>
            <li>ดูพื้นดวงโดยรวม</li>
            <li>เปิดคำถามจุก ๆ ไม่อั้น</li>
            <li>ส่องจิตกันแบบสุด ๆ</li>
            <li>ปิดท้ายด้วยไพ่ Oracle </li>
          </ul>
        </Card>
        <Card
          name="แพคส่องจิต 6 เดือน"
          price={["50 นาที 599.-", "+wallpaper = 969.-"]}
        >
          <ul className="text-left pl-4 list-disc m-auto">
            <li>เปิดดวงจากไพ่มาโร่ต์</li>
            <li>ดูพื้นดวงทั้ง 6 เดือน</li>
            <li>เปิดคำถามจุก ๆ ไม่อั้น</li>
            <li>ปิดท้ายด้วยไพ่ Oracle </li>
            <li>สิ่งศักดิ์สิทธิ์ประจำตัว</li>
            <li>เช็คเบอร์โทรมูลค่า 429</li>
          </ul>
        </Card>
        <Card
          name="โหราศาสตร์ตะวันตก"
          price={["50 นาที 1,599.-", "+reiki = 969.-"]}
        >
          <ul className="text-left pl-4 list-disc m-auto">
            <li>เปิดดวงจากไพ่มาโร่ต์</li>
            <li>ดูพื้นดวงทั้ง 6 เดือน</li>
            <li>เปิดคำถามจุก ๆ ไม่อั้น</li>
            <li>ปิดท้ายด้วยไพ่ Oracle </li>
            <li>สิ่งศักดิ์สิทธิ์ประจำตัว</li>
            <li>เช็คเบอร์โทรมูลค่า 429</li>
          </ul>
        </Card>
        <Card name="ตรวจเบอร์โทรศัพท์" price={["20 นาที 429.-"]}>
          <ul className="text-left pl-4 list-disc m-auto">
            <li>เช็คพลังงานเบอร์ที่ใช้</li>
            <li>ตั้งเบอร์ตามเลขศาสตร์</li>
            <li>วางตำแหน่งเบอร์โทร</li>
            <li>ใช่ศาสตร์ไทย+ตะวันตก</li>
            <li>หาเบอร์โทร+ผูกฤกษ์</li>
          </ul>
        </Card>
        <Card name="BASIC COLOR" price={["456.-"]}>
          <p>ได้สีมงคล 3 เรื่องๆละ 2-3 สี</p>
          <p>จาก Birth Chart!!</p>
          <li>สีประจำตัว</li>
          <li>สีเสริมการเงิน</li>
          <li>สรเสริมความรัก</li>
        </Card>
      </div>
    </div>
  );
};

export default Service;
