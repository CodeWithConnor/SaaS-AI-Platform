import { Button } from '@/components/ui/button';
import Link from 'next/link';
 
 const LandingPage = () => {
  return (
    <div>
      <p className="text-6xl text-black">Landing Page (unprotected)</p>
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;