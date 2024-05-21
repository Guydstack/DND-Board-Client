import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Heading, Link, Divider, Text } from "@chakra-ui/react";


function Faq (){

    return (
        <> 
<Heading size={"md"} textAlign={"center"} m={5}>Frequently Asked Questions</Heading>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
            Is shipping free?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        Yes! We always offer free shipping and free returns at DNDBoard :)
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        My product is damaged/defective, what can I do?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We're really sorry to hear about your product, but of course we'd love to fix this for you!

    Please send a picture of the issue to <Link as="a" href="mailto:dahan.nature.design@gmail.com">dahan.nature.design@gmail.com</Link>, and we'll be sure to find a great solution for you! :)
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        Why do I need a Balance Board?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    With the board, you train your muscles and balance in a completely new way.

    The result? Strong deep muscles that protect you from injuries, prevent discomfort, and improve your body awareness.

    The beauty of board training is that it's also fun, and you can train anytime, anywhere, at home or outdoors.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        How much weight can a board hold?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    The boards are tested up to 120kg.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        Board and Rooler mesurments?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Heading size={"sm"}>Board</Heading>
        Hight: 88cm, Widht: 38cm 
        <Divider/>
        <Heading size={"sm"} paddingTop={5}>Roller</Heading>
        Roller diameter: 11cm 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        What makes DND Roller so unique?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    The roller is produced by us with a unique engraving work, and is made of layers of recycled pine wood wrapped in cork and allows for smooth movement and perfect contact between the board and the surface. The roller remains stable, wear-resistant, and keeps its shape forever.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left' dir="rtl">
        בלנס בורד לילדים - החל מאיזה גיל
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} dir="rtl">
            באיזה גיל ניתן להתחיל עם לוח איזון לילדים?
        על מנת לתת מענה לכל שלב התפתחותי, עיצבנו עבורכם שלושה דגמים בדרגות קושי שונות.

        ניתן להתחיל החל מגיל שנה בדגם קשת נמוכה, אך יש לעשות זאת בליווי הורים ותחת השגחה קפדנית. בגיל 3 ניתן לעבור לבורד עם קשת גבוהה. ועבור המתקדמים, החל מגיל 10, ניתן להזמין בורד עם רולר עץ וללא קשתות.
        
        בעזרת לוח איזון מעץ לילדים ניתן לשפר את המיומנויות החשובות החל מגיל צעיר, וזוהי גם פעילות מאתגרת המעניקה הנאה רבה.    
        <Divider my={2} />
        <Text as="b">DND BOARD </Text>
        מביאים לכם בלנס בורד בעבודת יד. כל מוצרינו מבוססים על עץ, ולמרות כי הדגמים זהים, כל אחד מבטא ייחודיות בזכות הטקסטורה הטבעית והשונה של העץ.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </>
    );
}

export default Faq;
