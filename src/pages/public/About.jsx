import { Box, Heading, Text, Card, Image, Stack, CardBody, CardFooter, Button, Flex, Center, useBreakpointValue } from "@chakra-ui/react";
import IconsFooter from "../../components/sections/IconsFooter"

function About() {
  const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });

  return (
    <>
      <Flex minH="65vh" maxW="90%" mx="auto" py={110} px={4} justify="center" flexDirection="column" gap={5}>
      <Card maxW="100%" overflow="hidden" shadow="none" borderRadius="none">
          <Stack direction={isMobile ? 'column' : 'row'}>
            <CardBody paddingTop={{ base: 5, sm: 5, md: 5, lg: 300}} order={ isMobile ?  1 : 2 }>
              <Heading size='md' textAlign="center" mb={4}>קצת עלינו</Heading>
              <Text dir="rtl">
                עבורנו, ייצור נקי ואקולוגי היא יותר מסתם אסטרטגיה שיווקית; עבורנו קיימות סביבתית היא חלק מרכזי בחזון שלנו והיא באה לידי ביטוי בתהליכי הייצור והמוצרים שלנו.
                אנו מודעים ומחויבים לאחריותנו כלפי הסביבה, וברוח זו אנו עובדים עם ספקים אזוריים ומוסמכים העומדים בסטנדרטים שלנו. אנו מקפידים על בחירת חומרי הגלם ועובדים עם שיטות עיבוד ידני המעניקות למוצרינו את האפיון הייחודי, לצד איכות גבוהה ללא פשרות וחיי מדף ארוכים. ועבורכם הנאה, לייפסטייל ושיפור היכולות הגופניות.
              </Text>
            </CardBody>
            <Image
              shadow="none"
              objectFit='cover'
              width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
              src='https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/kujw3fgv2ya0gedwjbuh.jpg'
              alt='Balance Board'
              order={ isMobile ?  2 : 1 }
            />
          </Stack>
        </Card>

        <Card maxW="100%" overflow="hidden" shadow="none" borderRadius="none">
          <Stack direction={isMobile ? 'column' : 'row'}>
            <CardBody paddingTop={{ base: 5, sm: 5, md: 5, lg: 300}} order={ isMobile ?  2 : 1 }>
            <Heading size='md' textAlign="center" mb={4}>גליל ייחודי מעץ אורן מלא</Heading>
              <Text dir="rtl">
              הלב של לוח האיזון שלנו הוא רולר עץ מלא; בחירת החומרים מעניקה לרולר את היציבות ואת העמידות לאורך זמן. והתוצאה הסופית היא חוויית איזון מהנה במיוחד ובורד שהוא ללא תחרות מבחינת העמידות, האיכות והעיצוב.              
              </Text>
            </CardBody>
            <Image
              shadow="none"
              objectFit='cover'
              width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
              src='https://res.cloudinary.com/doxiillcn/image/upload/v1714389154/izv0z49h7yssndo2nhy5.jpg'
              alt='Balance Board Roller'
              order={ isMobile ?  2 : 1 }
            />
          </Stack>
        </Card>

        <Card maxW="100%" overflow="hidden" shadow="none" borderRadius="none">
          <Stack direction={isMobile ? 'column' : 'row'}>
            <CardBody paddingTop={{ base: 5, sm: 5, md: 5, lg: 300}} order={ isMobile ?  1 : 2 }>
            <Heading size='md' textAlign="center" mb={4}>לוח איזון מתאים לכל אימון</Heading>
            <Text dir="rtl">
                            בין אם מטרתכם היא שיקום שרירים לאחר פציעה, או חיזוק שרירי הליבה, תוכלו להפיק תועלת מהבורד. אימון עם לוח איזון מאפשר לחזק את שרירי הרגליים, הידיים והגב, לאמן את שיווי המשקל והקואורדינציה.
              לא משנה אם אתם גולשי גלים, סנובורד, סקייטבורד, רוכבים על אופניים או עושים יוגה  - הבורד שלנו יכניס אתכם לקצב חדש שלא הכרתם! הוא יאפשר לכם להיות אפקטיביים יותר והכל בהנאה גדולה. 
              בעזרת תרגילים מאתגרים ומהנים תוכלו לשפר את הכושר הגופני, להיות מרוכזים יותר בעבודה ולימודים, ולשחרר את הסטרס היומיומי. הבורד יכניס אתכם למיינדסט הנכון ויאפשר לכם לקחת את הכושר שלכם לרמה חדשה.               
              </Text>
            </CardBody>
            <Image
              shadow="none"
              objectFit='cover'
              width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
              src='https://res.cloudinary.com/doxiillcn/image/upload/v1714233497/iush85cgq0qg51g49rd9.jpg'
              alt='Balance Board'
              order={ isMobile ?  2 : 1 }
            />
          </Stack>
        </Card>

        <Card maxW="100%" overflow="hidden" shadow="none" borderRadius="none">
          <Stack direction={isMobile ? 'column' : 'row'}>
            <CardBody paddingTop={{ base: 5, sm: 5, md: 5, lg: 300}} order={ isMobile ?  2 : 1 }>
            <Heading size='md' textAlign="center" mb={4}>טיפים לשימוש בלוח איזון</Heading>
            <Text dir="rtl">
                            אם החלטתם למתוח את הגבולות ולנסות דברים חדשים, בהתחלה רצוי לבצע את הניסיונות הראשונים בעמידה ואמצעי עזר לתמיכה; תוכלו לעשות זאת עם שותף לאימון או להיעזר במשענת הכיסא. מומלץ לעשות זאת ברגליים יחפות.
              ​אם אתם מתקשים, ניתן להוסיף להזמנה מעצורים המונעים את בריחת הבורד מהגליל ולמנוע נפילה. אך על מנת לאתגר את היכולות וחופש התנועה, ולמקסם את ההנאה, בהמשך כדי להוריד את המעצורים.              
              </Text>
            </CardBody>
            <Image
              shadow="none"
              objectFit='cover'
              width={{ base: '100%', sm: '100%', md: '100%', lg: '50%' }}
              src='https://res.cloudinary.com/doxiillcn/image/upload/v1714234127/ucnfwr3zmup1zeuzjzus.jpg'
              alt='Balance Board'
              order={ isMobile ?  2 : 1 }
            />
          </Stack>
        </Card>

      </Flex>
      <IconsFooter/>
    </>
  );
}

export default About;

